// config.ts
import { development } from './development';
import { production } from './production';
import type { AppConfig } from './types';

const envConfig = {
  development,
  production,
};

const getEnvConfig = (env: string): AppConfig => {
  return envConfig[env as keyof typeof envConfig] || 'development';
};

export const config: AppConfig = getEnvConfig(
  import.meta.env.MODE || 'development'
);
