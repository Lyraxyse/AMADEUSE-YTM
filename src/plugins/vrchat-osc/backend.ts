import { createBackend } from '@/utils';
import type { VRChatOSCConfig } from './config';
import registerCallback, { SongInfoEvent, type SongInfo } from '@/providers/song-info';
import { createSocket } from 'dgram';
import { Buffer } from 'buffer';

interface OSCMessage {
  address: string;
  args: Array<{ type: string; value: any }>;
}

let oscClient: any = null;
let updateInterval: NodeJS.Timeout | null = null;
let isConnected = false;
let currentSongInfo: SongInfo | null = null;
let currentConfig: VRChatOSCConfig | null = null;

// Fonction pour encoder un message OSC
function encodeOSCMessage(message: OSCMessage): Buffer {
  const addressBuffer = Buffer.from(message.address + '\0');
  const addressPadding = 4 - (addressBuffer.length % 4);
  const paddedAddress = Buffer.concat([addressBuffer, Buffer.alloc(addressPadding)]);

  let typeTag = ',';
  const argBuffers: Buffer[] = [];

  for (const arg of message.args) {
    if (arg.type === 's') {
      typeTag += 's';
      const stringBuffer = Buffer.from(arg.value + '\0');
      const stringPadding = 4 - (stringBuffer.length % 4);
      argBuffers.push(Buffer.concat([stringBuffer, Buffer.alloc(stringPadding)]));
    } else if (arg.type === 'i') {
      typeTag += 'i';
      const intBuffer = Buffer.alloc(4);
      intBuffer.writeInt32BE(arg.value, 0);
      argBuffers.push(intBuffer);
    } else if (arg.type === 'T') {
      typeTag += 'T';
    } else if (arg.type === 'F') {
      typeTag += 'F';
    }
  }

  const typeTagBuffer = Buffer.from(typeTag + '\0');
  const typeTagPadding = 4 - (typeTagBuffer.length % 4);
  const paddedTypeTag = Buffer.concat([typeTagBuffer, Buffer.alloc(typeTagPadding)]);

  return Buffer.concat([paddedAddress, paddedTypeTag, ...argBuffers]);
}

// Fonction pour envoyer un message OSC
function sendOSCMessage(host: string, port: number, message: OSCMessage) {
  if (!oscClient) {
    oscClient = createSocket('udp4');
  }

  const buffer = encodeOSCMessage(message);
  
  oscClient.send(buffer, port, host, (error: any) => {
    if (error) {
      console.error('[VRChat OSC] Erreur lors de l\'envoi:', error);
      isConnected = false;
    } else {
      isConnected = true;
    }
  });
}

// Fonction pour créer la barre de progression
function createProgressBar(current: number, total: number, length: number): string {
  if (total === 0) return ''.padEnd(length, '□');
  
  const progress = Math.min(current / total, 1);
  const filled = Math.floor(progress * length);
  const empty = length - filled;
  
  return '■'.repeat(filled) + '□'.repeat(empty);
}

// Fonction pour formater le temps
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Fonction pour envoyer les informations musicales
function sendMusicInfo(config: VRChatOSCConfig, songInfo: SongInfo | null = null) {
  const info = songInfo || currentSongInfo;
  
  if (!info || !info.title) {
    // Effacer la chatbox si aucune musique
    const clearMessage: OSCMessage = {
      address: '/chatbox/input',
      args: [
        { type: 's', value: '' },
        { type: 'T', value: true }, // immediate
        { type: 'F', value: false } // bypass keyboard
      ]
    };
    sendOSCMessage(config.host, config.port, clearMessage);
    return;
  }

  let chatboxText = '> Amadeuse Music <\n';
  chatboxText += `Music: ${info.title}\n`;
  
  if (config.showProgress && info.songDuration && info.elapsedSeconds !== undefined) {
    const progressBar = createProgressBar(
      info.elapsedSeconds,
      info.songDuration,
      config.progressBarLength
    );
    const currentTime = formatTime(info.elapsedSeconds);
    const totalTime = formatTime(info.songDuration);
    chatboxText += `${progressBar}\n`;
    chatboxText += `By ${info.artist || 'Artiste'} - ${currentTime}/${totalTime}`;
  } else {
    chatboxText += '♪ Playing ♪\n';
    chatboxText += `By ${info.artist || 'Artiste'} - ♪`;
  }

  // Limiter à 144 caractères (limite VRChat)
  if (chatboxText.length > 144) {
    chatboxText = chatboxText.substring(0, 141) + '...';
  }

  const message: OSCMessage = {
    address: '/chatbox/input',
    args: [
      { type: 's', value: chatboxText },
      { type: 'T', value: true }, // immediate
      { type: 'F', value: false } // bypass keyboard
    ]
  };

  sendOSCMessage(config.host, config.port, message);
}

export const backend = createBackend<{}, VRChatOSCConfig>({
  start({ getConfig }) {
    console.log('[VRChat OSC] Plugin démarré');
    
    // Enregistrer le callback pour recevoir les informations de chanson
    registerCallback((songInfo, event) => {
      currentSongInfo = songInfo;
      
      if (currentConfig && currentConfig.enabled) {
        // Envoyer immédiatement lors des changements de chanson ou de statut
        if (event === SongInfoEvent.VideoSrcChanged || event === SongInfoEvent.PlayOrPaused) {
          sendMusicInfo(currentConfig, songInfo);
        }
      }
    });
  },

  async onConfigChange(newConfig) {
    console.log('[VRChat OSC] Configuration mise à jour:', newConfig);
    currentConfig = newConfig;
    
    // Arrêter l'ancien intervalle
    if (updateInterval) {
      clearInterval(updateInterval);
      updateInterval = null;
    }

    // Fermer l'ancien client
    if (oscClient) {
      oscClient.close();
      oscClient = null;
    }

    if (newConfig.enabled) {
      console.log(`[VRChat OSC] Connexion à ${newConfig.host}:${newConfig.port}`);
      
      // Démarrer le nouvel intervalle pour les mises à jour de progression
      updateInterval = setInterval(() => {
        if (currentSongInfo) {
          sendMusicInfo(newConfig, currentSongInfo);
        }
      }, newConfig.updateInterval);
      
      // Envoyer immédiatement si on a des informations
      if (currentSongInfo) {
        sendMusicInfo(newConfig, currentSongInfo);
      }
    } else {
      console.log('[VRChat OSC] Plugin désactivé');
      // Effacer la chatbox
      const clearMessage: OSCMessage = {
        address: '/chatbox/input',
        args: [
          { type: 's', value: '' },
          { type: 'T', value: true },
          { type: 'F', value: false }
        ]
      };
      sendOSCMessage(newConfig.host, newConfig.port, clearMessage);
    }
  },

  stop() {
    console.log('[VRChat OSC] Plugin arrêté');
    
    if (updateInterval) {
      clearInterval(updateInterval);
      updateInterval = null;
    }

    if (oscClient) {
      oscClient.close();
      oscClient = null;
    }
    
    isConnected = false;
    currentSongInfo = null;
    currentConfig = null;
  },
});