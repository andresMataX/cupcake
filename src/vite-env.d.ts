/// <reference types="vite/client" />

interface ImportMetaEnv {
  // API
  readonly VITE_API_URL: string

  // Third-party API keys
  readonly VITE_CLERK_PUBLISHABLE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
