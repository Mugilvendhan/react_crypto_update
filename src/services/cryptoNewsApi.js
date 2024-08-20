import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders= {
       'x-rapidapi-key': '4df5504c63msh79320b6968349fep152500jsna4342e80f295',
    'x-rapidapi-host': 'news-api14.p.rapidapi.com'
};

const baseUrl = 'https://news-api14.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });



export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/v2/search/publishers?query=${newsCategory}&count=${count}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
