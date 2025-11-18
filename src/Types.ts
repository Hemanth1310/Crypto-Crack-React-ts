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

interface CurrencyData {
  [currency: string]: number;
}

// Used for price_change_percentage_24h_in_currency, etc.
interface PriceChangePercentageData {
    [currency: string]: number;
}

// --- 2. Localization and Text Data ---

interface LocalizedText {
  [language: string]: string;
}

// --- 3. Links Data ---

interface Repositories {
  github: string[];
  bitbucket: string[];
}

interface Links {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  snapshot_url: string | null;
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: number | null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: Repositories;
}

// --- 4. Market Data ---

interface MarketData {
  current_price: CurrencyData;
  market_cap: CurrencyData;
  total_volume: CurrencyData;
  high_24h: CurrencyData;
  low_24h: CurrencyData;
  ath: CurrencyData;
  ath_change_percentage: CurrencyData;
  ath_date: { [currency: string]: string };
  atl: CurrencyData;
  atl_change_percentage: CurrencyData;
  atl_date: { [currency: string]: string };

  // Core metrics
  market_cap_rank: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  fully_diluted_valuation: CurrencyData | null;
  total_supply: number | null;
  circulating_supply: number;

  // Change percentages (flat numbers)
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_30d: number;
  
  // Change percentages (per currency)
  price_change_24h_in_currency: PriceChangePercentageData;
  price_change_percentage_1h_in_currency: PriceChangePercentageData;
  price_change_percentage_24h_in_currency: PriceChangePercentageData;
  price_change_percentage_7d_in_currency: PriceChangePercentageData;
  // ... (many more percentage fields omitted for brevity)
  
  // Nullable/Advanced Fields
  total_value_locked: null;
  roi: any | null; // Complex ROI object or null
  last_updated: string;
}

// --- 5. Main Coin Detail Interface ---

/**
 * Interface for the full CoinGecko /coins/{id} response.
 */
export interface CoinDetailData {
  // Core Identifiers
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string | null;

  // Basic Info
  block_time_in_minutes: number;
  hashing_algorithm: string | null;
  categories: string[];
  genesis_date: string;
  
  // Nested Data
  localization: LocalizedText;
  description: LocalizedText;
  links: Links;
  market_data: MarketData;
  
  // Image URLs
  image: {
    thumb: string;
    small: string;
    large: string;
  };

  // Other Metrics
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;

  // Extremely complex/unused fields can be left as 'any'
  platforms: any;
  detail_platforms: any;
  public_notice: any;
  additional_notices: any;
}

type HistoricalDataPoint = [
    number,number
]

export type MarketChartData = [
    number,
    number
]

