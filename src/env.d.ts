interface ImportMetaEnv {
  // Define your VITE_ variables here. 
  // Vite always treats them as strings.
  readonly VITE_API_URL_Currency: string;
  readonly VITE_API_ENDPOINT: string;
  // Add any other custom VITE_ variables you use
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}