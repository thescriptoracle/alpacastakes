import { StakingPool, CryptoToken } from "@/types/staking";

export const STAKING_POOLS: StakingPool[] = [
  { id: "1month", duration: "1 Month", dailyROI: 5, label: "Quick Returns" },
  {
    id: "3months",
    duration: "3 Months",
    dailyROI: 6,
    label: "Balanced Growth",
    popular: true,
  },
  { id: "6months", duration: "6 Months", dailyROI: 7, label: "High Yield" },
  {
    id: "12months",
    duration: "12 Months",
    dailyROI: 8,
    label: "Maximum Returns",
  },
];

export const CRYPTO_TOKENS: CryptoToken[] = [
  { symbol: "USDT", name: "Tether", price: 1.0, icon: "₮" },
  { symbol: "BTC", name: "Bitcoin", price: 108183, icon: "₿" },
  { symbol: "ETH", name: "Ethereum", price: 2530, icon: "Ξ" },
  { symbol: "SOL", name: "Solana", price: 147, icon: "SOL" },
  { symbol: "ALPACA", name: "Alpaca Token", price: 0.0125, icon: "ALPT" },
  { symbol: "XRP", name: "Ripple", price: 2.2, icon: "XRP" },
  { symbol: "ADA", name: "Cardano", price: 0.57, icon: "ADA" },
  { symbol: "DOGE", name: "Dogecoin", price: 0.16, icon: "Ð" },
];

export const WALLET_ADDRESSES: Record<string, string> = {
  USDT: "0x10530A4cB91c59D819310828c8E12216BA08EB11",
  ETH: "0x10530A4cB91c59D819310828c8E12216BA08EB11",
  ALPACA: "0x10530A4cB91c59D819310828c8E12216BA08EB11",
  BTC: "bc1qmn2ffve4gceln8t68wa7q68psg9mmw802rva5t",
  XRP: "rNVW5o3yWykwL8BnbRbg5zjgcTVG9g7riD",
  ADA: "addr1qy0wdnx5v0csddpc9kxany6gwv2zsazfg2v8te0kn7kehl0dgl6wmhas3axde727yed5dsfp4e07tdm33g5tkceumwvqnp7hst",
  SOL: "3RQikkMx66S4VM6vcjrP393XJ6SZ8d8Bz2NmpjuoYKKR",
  DOGE: "DGatMm2o4nuUgCYicTtkBbuUbQzUhzh7jv",
};
