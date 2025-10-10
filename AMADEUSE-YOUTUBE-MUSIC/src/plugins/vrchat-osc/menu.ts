import { t } from '@/i18n';
import type { MenuContext } from '@/types/contexts';
import type { VRChatOSCConfig } from './config';

export const onMenu = async ({ getConfig, setConfig }: MenuContext<VRChatOSCConfig>) => {
  const config = await getConfig();

  return [
    {
      label: t('plugins.vrchat-osc.menu.enabled'),
      type: 'checkbox',
      checked: config.enabled,
      click() {
        setConfig({ enabled: !config.enabled });
      },
    },
    {
      type: 'separator',
    },
    {
      label: t('plugins.vrchat-osc.menu.host'),
      submenu: [
        {
          label: '127.0.0.1 (Local)',
          type: 'radio',
          checked: config.host === '127.0.0.1',
          click() {
            setConfig({ host: '127.0.0.1' });
          },
        },
        {
          label: 'localhost',
          type: 'radio',
          checked: config.host === 'localhost',
          click() {
            setConfig({ host: 'localhost' });
          },
        },
      ],
    },
    {
      label: t('plugins.vrchat-osc.menu.port'),
      submenu: [
        {
          label: '9000 (Default)',
          type: 'radio',
          checked: config.port === 9000,
          click() {
            setConfig({ port: 9000 });
          },
        },
        {
          label: '9001',
          type: 'radio',
          checked: config.port === 9001,
          click() {
            setConfig({ port: 9001 });
          },
        },
      ],
    },
    {
      label: t('plugins.vrchat-osc.menu.showProgress'),
      type: 'checkbox',
      checked: config.showProgress,
      click() {
        setConfig({ showProgress: !config.showProgress });
      },
    },
    {
      label: t('plugins.vrchat-osc.menu.updateInterval'),
      submenu: [
        {
          label: '1500ms (Default - Anti-spam)',
          type: 'radio',
          checked: config.updateInterval === 1500,
          click() {
            setConfig({ updateInterval: 1500 });
          },
        },
        {
          label: '2000ms',
          type: 'radio',
          checked: config.updateInterval === 2000,
          click() {
            setConfig({ updateInterval: 2000 });
          },
        },
        {
          label: '3000ms',
          type: 'radio',
          checked: config.updateInterval === 3000,
          click() {
            setConfig({ updateInterval: 3000 });
          },
        },
      ],
    },
  ];
};