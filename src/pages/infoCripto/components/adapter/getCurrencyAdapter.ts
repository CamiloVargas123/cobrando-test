import { Currency, ListCurrencyApi } from "src/models";

export const getCurrencyAdapter = ({ data }: ListCurrencyApi): Currency[] => {
  return data.map(item => (
    {
      id: item.id,
      csupply: item.csupply,
      market_cap_usd: item.market_cap_usd,
      msupply: item.msupply,
      name: item.name,
      nameid: item.nameid,
      percent_change_1h: item.percent_change_1h,
      percent_change_24h: item.percent_change_24h,
      percent_change_7d: item.percent_change_7d,
      price_btc: item.price_btc,
      price_usd: item.price_usd,
      rank: item.rank,
      symbol: item.symbol,
      tsupply: item.tsupply,
      volume24: item.volume24,
      volume24a: item.volume24a
    }
  ))
};