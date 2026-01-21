import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import favoritesReducer from './favoritesSlice';
import settingsReducer from './settingsSlice';
import { persistenceMiddleware } from './middleware';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        favorites: favoritesReducer,
        settings: settingsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistenceMiddleware),
});
