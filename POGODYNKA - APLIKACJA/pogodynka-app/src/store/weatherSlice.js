import { createSlice } from '@reduxjs/toolkit';
import { MOCK_CITIES } from '../utils/mockData';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        cities: MOCK_CITIES,
        loading: false,
        error: null,
    },
    reducers: {
        // If we had real API calls, we'd use thunks. For now, we just have the data.
    },
});

export default weatherSlice.reducer;
