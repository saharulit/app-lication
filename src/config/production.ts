import type { AppConfig } from './types';

export const production: AppConfig = {
  ENV: 'production',
  BASENAME: '/app-lication',
  SERVER_BASE_URL: 'https://app-lication-server.vercel.app/api/',
};
