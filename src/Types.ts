export type Currency = string

interface ImportMetaEnv {
  // Define your VITE_ variables here. 
  // Vite always treats them as strings.
  readonly VITE_API_BASE_URL: string;
  readonly VITE_MAX_ITEMS: string;
  // Add any other custom VITE_ variables you use
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}