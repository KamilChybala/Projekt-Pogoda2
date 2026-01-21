import { createSlice } from '@reduxjs/toolkit';

const getInitialFavorites = () => {
    try {
        const saved = localStorage.getItem('weatherApp_favorites');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: getInitialFavorites(), // array of city IDs
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const cityId = action.payload;
            if (state.items.includes(cityId)) {
                state.items = state.items.filter(id => id !== cityId);
            } else {
                state.items.push(cityId);
            }
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
