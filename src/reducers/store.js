import { createStore } from 'redux';
import rootReducer from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";
import localStorage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage: localStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)

