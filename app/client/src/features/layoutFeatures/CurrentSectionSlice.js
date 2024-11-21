import { createSlice } from '@reduxjs/toolkit';

const CurrentSectionSlice = createSlice({
    name: 'currentSection',
    initialState: {
        currentSection: {
            name: 'home',
            title: 'Dashboard',
            subtitle: 'Panel sterowania pojazdem mobilnym'
        },
    },
    reducers: {
        setCurrentSection(state, action) {
            state.currentSection = action.payload;
        },
    },
});

export const { setCurrentSection } = CurrentSectionSlice.actions;
export default CurrentSectionSlice.reducer;