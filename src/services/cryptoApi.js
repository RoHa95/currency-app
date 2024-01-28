const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-R4rH3dj3poEXYxsrofJxDHj1";

const getCoinList = (page, vs_currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${vs_currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
};
export { getCoinList };
