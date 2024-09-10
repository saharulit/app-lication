export interface AppConfig {
  BASENAME: string;
  ENV: 'development' | 'alpha' | 'staging' | 'production';
  SERVER_BASE_URL: string;
}
