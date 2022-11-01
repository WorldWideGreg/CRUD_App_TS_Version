import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";
import { listenerMiddleware } from "./listener";

export const Store = configureStore({
    reducer: {
        app:Reducer
},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});
        
