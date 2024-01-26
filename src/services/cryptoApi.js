import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'x-access-token',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_COINRANKING
}
const baseUrl = "https://api.coinranking.com/v2/";
const createRequest = (url) => ({url, header:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            // query: (count) => createRequest(`/coins`),
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId,timePeriod}) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
        }),

    }),

});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;

