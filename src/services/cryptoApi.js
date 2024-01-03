import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders = {
    // 'X-RapidAPI-Key': 'ea9a695fcbmshb68f36843fb162sfp1f11aajsn722aa738fd24',
    // 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com' 
    'X-RapidAPI-Host': 'x-access-token',
    'X-RapidAPI-Key': 'coinranking84add9d45080b98c59d9efc452e08593491ca02a0d661f2f'
}
const baseUrl = "https://api.coinranking.com/v2/";
const createRequest = (url) => ({url, header:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:() => createRequest('/coins'),
        }) 
    }),

});

export const { useGetCryptosQuery } = cryptoApi;

