import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: "homeCoverStatus",
    initialState: {
        value: true,
    },
    reducers: {
        homeCoverUnMount: state => {
            state.value = false
        },
    },
    
});

export const { homeCoverUnMount } = homeSlice.actions;

export const selectHomeCoverStatus = state => state.homeCoverStatus.value;

export default homeSlice.reducer;