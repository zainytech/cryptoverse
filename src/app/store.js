import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {cryptoApi} from "../services/cryptoApi";

// export default configureStore({
//     reducer : {
//         [cryptoApi.reducerPath] : cryptoApi.reducer,
//     },
// });

export default configureStore({
    reducer : {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
    },
    middleware: (buildGetDefaultMiddleware) => 
    buildGetDefaultMiddleware().concat(cryptoApi.middleware),
});

// setupListeners(store.dispatch);