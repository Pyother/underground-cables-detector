import { createSlice } from '@reduxjs/toolkit';

const ConnectionSlice = createSlice({
    name: 'connection',
    initialState: {
        server: true,
        device: true
    },
    reducers: {
        setServerConnection: (state, action) => {
            state.server = action.payload;
        },
        setDeviceConnection: (state, action) => {
            state.device = action.payload;
        }
    }
});

export const { setServerConnection, setDeviceConnection } = ConnectionSlice.actions;
export default ConnectionSlice.reducer;