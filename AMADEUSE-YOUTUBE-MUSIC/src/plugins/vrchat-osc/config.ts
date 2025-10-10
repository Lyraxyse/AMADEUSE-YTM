export interface VRChatOSCConfig {
  enabled: boolean;
  host: string;
  port: number;
  updateInterval: number;
  showProgress: boolean;
  progressBarLength: number;
}

export const defaultVRChatOSCConfig: VRChatOSCConfig = {
  enabled: false,
  host: '127.0.0.1',
  port: 9000,
  updateInterval: 1500, // 1500ms minimum recommandé par VRChat pour éviter le spam
  showProgress: true,
  progressBarLength: 10,
};