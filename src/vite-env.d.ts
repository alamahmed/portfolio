/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_SERVICE_ID: string
  readonly VITE_EMAIL_TEMPLATE_ID: string
  readonly VITE_EMAIL_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 