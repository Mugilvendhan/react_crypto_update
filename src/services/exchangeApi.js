import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const coinGeckoApiHeaders = {
    'X-CMC_PRO_API_KEY': 'Enter your api',
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
