/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_GA_MEASUREMENT_ID: string;
  // Add other environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
