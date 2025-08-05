import { createPlugin } from '@/utils';
import { t } from '@/i18n';

import { defaultVRChatOSCConfig } from './config';
import { onMenu } from './menu';
import { backend } from './backend';

export default createPlugin({
  name: () => t('plugins.vrchat-osc.name'),
  description: () => t('plugins.vrchat-osc.description'),
  restartNeeded: false,
  config: defaultVRChatOSCConfig,
  addedVersion: '3.10.X',
  menu: onMenu,
  backend,
});