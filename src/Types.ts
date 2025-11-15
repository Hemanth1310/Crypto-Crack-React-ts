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
interface ROI {
  times: number;
  currency: string;
  percentage: number;
}


export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null; 
  ath: number;
  ath_change_percentage: number;
  ath_date: string; // ISO Date String
  atl: number;
  atl_change_percentage: number;
  atl_date: string; // ISO Date String
  roi: ROI | null; // Can be null if ROI data isn't available
  last_updated: string; // ISO Date String
  price_change_percentage_1h_in_currency: number;
}