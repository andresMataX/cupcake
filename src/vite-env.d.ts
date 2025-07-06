/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Third-party API keys
  readonly VITE_CLERK_PUBLISHABLE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
