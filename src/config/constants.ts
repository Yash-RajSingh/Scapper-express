export const APP_CONFIG = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  REQUEST_TIMEOUT: 30000,
  MAX_RETRIES: 3
} as const;

export const SCRAPER_CONFIG = {
  USER_AGENT: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  REQUEST_DELAY: 1000, 
  TIMEOUT: 10000 
} as const; 