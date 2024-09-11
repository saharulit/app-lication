import type { AppConfig } from './types';

export const production: AppConfig = {
  ENV: 'production',
  BASENAME: '/',
  SERVER_BASE_URL: 'https://app-lication-server.vercel.app/api/',
};
