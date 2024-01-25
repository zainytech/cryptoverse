import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {cryptoApi} from "../services/cryptoApi";
import {cryptoNewsApi} from "../services/cryptoNewsApi";
import { cryptoExchange } from "../services/cryptoExchange";

export default configureStore({
    reducer : {
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoExchange.reducerPath] : cryptoExchange.reducer,
    
    },
    middleware: (buildGetDefaultMiddleware) => {
    const defaultMiddleware = buildGetDefaultMiddleware();
    return defaultMiddleware.concat(cryptoApi.middleware, cryptoNewsApi.middleware, cryptoExchange.middleware);
}
    // middleware: (getDefaultMiddleware) => 
    // getDefaultMiddleware().concat(cryptoNewsApi.middleware, cryptoApi.middleware)
});

// setupListeners(store.dispatch);