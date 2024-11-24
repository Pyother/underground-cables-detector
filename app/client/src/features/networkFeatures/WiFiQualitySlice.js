import { createSlice } from '@reduxjs/toolkit';

const WiFiQualitySlice = createSlice({
    name: 'wifi',
    initialState: {
        signalStrength: -70,
        ssid: 'Example SSID',
    },
    // TODO: Trzeba napisać funkcję do zamiany siły sygnału na procenty.
    reducers: {
        setSignalStrength: (state, action) => {
            state.signalStrength = action.payload;
        },
        setSSID: (state, action) => {
            state.ssid = action.payload;
        },
    }
});

export const { setSignalStrength, setSSID } = WiFiQualitySlice.actions;
export default WiFiQualitySlice.reducer;