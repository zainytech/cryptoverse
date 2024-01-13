import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {cryptoApi} from "../services/cryptoApi";
import {cryptoNewsApi} from "../services/cryptoNewsApi";

export default configureStore({
    reducer : {
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
        [cryptoApi.reducerPath] : cryptoApi.reducer,
    
    },
    middleware: (buildGetDefaultMiddleware) => {
    const defaultMiddleware = buildGetDefaultMiddleware();
    return defaultMiddleware.concat(cryptoApi.middleware, cryptoNewsApi.middleware);
}
    // middleware: (getDefaultMiddleware) => 
    // getDefaultMiddleware().concat(cryptoNewsApi.middleware, cryptoApi.middleware)
});

// setupListeners(store.dispatch);