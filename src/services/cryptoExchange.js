import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react';

const cryptoExchangeHeaders = {
    'X-RapidAPI-Key': 'ea9a695fcbmshb68f36843fb162fp1f11aajsn722aa738fd24',
    'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com'
}
const baseUrl = 'https://coinpaprika1.p.rapidapi.com'
const createRequest = (url) => ({url, header:cryptoExchangeHeaders});

export const cryptoExchange = createApi({
    reducerPath:"cryptoExchange",
    baseQuery : fetchBaseQuery({baseUrl:baseUrl}),
    endpoints: (builder) => ({
        getCryptoExchange: builder.query({
            query : () => createRequest('/exchanges'),
        })
    })
})

export const { useGetCryptoExchangeQuery } = cryptoExchange;