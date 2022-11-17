import axios from "axios";
import { Currency } from "src/models";
import { getCurrencyAdapter } from "../adapter/getCurrencyAdapter";

interface Filter {
  start: number
  limit: number
}
export async function getListCurrency(filter?: Filter): Promise<Currency[]> {
  return axios.get(`/tickers/?start=${filter?.start ?? 0}&limit=${filter?.limit ?? 100}`).then(res => getCurrencyAdapter(res.data))
}