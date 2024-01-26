import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react';

const baseUrl = ' https://api.coingecko.com/api/v3'

export const cryptoExchange = createApi({
    reducerPath:"cryptoExchange",
    baseQuery : fetchBaseQuery({baseUrl:baseUrl}),
    endpoints: (builder) => ({
        getCryptoExchange: builder.query({
            query : (arg) => `/exchanges?x_cg_api_key=${arg.key}`,
        })
    })
})

export const { useGetCryptoExchangeQuery } = cryptoExchange;