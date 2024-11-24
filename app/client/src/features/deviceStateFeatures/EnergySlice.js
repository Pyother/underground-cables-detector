import { createSlice } from '@reduxjs/toolkit';

const EnergySlice = createSlice({
    name: 'energy',
    initialState: {
        energy: 76
    },
    reducers: {
        setEnergy: (state, action) => {
            state.energy = action.payload;
        }
    }
});

export const { setEnergy } = EnergySlice.actions;
export default EnergySlice.reducer;