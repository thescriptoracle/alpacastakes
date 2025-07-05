export interface StakingPool {
  id: string;
  duration: string;
  dailyROI: number;
  label: string;
  popular?: boolean;
}

export interface CryptoToken {
  symbol: string;
  name: string;
  price: number;
  icon: string;
}