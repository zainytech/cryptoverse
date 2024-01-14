import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': 'ea9a695fcbmshb68f36843fb162fp1f11aajsn722aa738fd24',
  'X-RapidAPI-Host': 'news67.p.rapidapi.com'
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://news67.p.rapidapi.com/v2' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      // query: ({newsCategory}) => createRequest(`/search?query=${newsCategory}`),
      query: (token) => createRequest(`/crypto?&languages=en&batchSize=25&token=${token}`),
    
    }),
  }),
});

export const { useGetCryptoNewsQuery  } = cryptoNewsApi;

