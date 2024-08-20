/* import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coinMarketCapApiHeaders = {
    'X-CMC_PRO_API_KEY': '844eeaf8-ca54-4c1b-968e-a85ad1bc24f4',  // Replace with your actual API key
    'Accept': 'application/json'
};

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1';


const createRequest = (url) => ({ url, headers: coinMarketCapApiHeaders });

export const coinMarketCapApi = createApi({
    reducerPath: 'coinMarketCapApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getExchangeInfo: builder.query({
        query: (exchangeId) => createRequest(`/exchange/info?id=${exchangeId}`),
      }),
    }),
});

export const { useGetExchangeInfoQuery } = coinMarketCapApi;
 */

// src/services/coinMarketCapApi.js
/* import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const coinMarketCapApiHeaders = {
    'X-CMC_PRO_API_KEY': 'CG-W3hv8jL275fuy6kDgvAgSeUw',  // Replace with your CoinMarketCap API key
  'Accept': 'application/json',
};

const baseUrl = 'https://api.coingecko.com/api/v3/exchanges';

const createRequest = (url) => ({ url, headers: coinMarketCapApiHeaders });

export const coinMarketCapApi = createApi({
  reducerPath: 'coinMarketCapApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchangeInfo: builder.query({
      query: (exchangeId) => createRequest(`/exchange/info?id=${exchangeId}`),
    }),
  }),
});

export const { useGetExchangeInfoQuery } = coinMarketCapApi;
 */




// src/services/coinGeckoApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const coinGeckoApiHeaders = {
    'X-CMC_PRO_API_KEY': 'CG-W3hv8jL275fuy6kDgvAgSeUw',
  'Accept': 'application/json',
};

const baseUrl = 'https://api.coingecko.com/api/v3';

const createRequest = (url) => ({ url, headers: coinGeckoApiHeaders });

export const coinGeckoApi = createApi({
  reducerPath: 'coinGeckoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchangeInfo: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const { useGetExchangeInfoQuery } = coinGeckoApi;
