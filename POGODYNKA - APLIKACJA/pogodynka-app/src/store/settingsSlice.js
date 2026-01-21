import { createSlice } from '@reduxjs/toolkit';

const getInitialUnit = () => {
    try {
        const saved = localStorage.getItem('weatherApp_unit');
        return saved ? JSON.parse(saved) : 'C';
    } catch (e) {
        return 'C';
    }
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        unit: getInitialUnit(), // 'C', 'F', 'K'
    },
    reducers: {
        setUnit: (state, action) => {
            state.unit = action.payload;
        },
    },
});

export const { setUnit } = settingsSlice.actions;
export default settingsSlice.reducer;
