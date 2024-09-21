import { createSlice } from '@reduxjs/toolkit';

const DeviceTypeSlice = createSlice({
    name: 'deviceType',
    initialState: {
        deviceType: window.innerWidth > 1024 ? 'desktop' : window.innerWidth > 768 ? 'tablet' : 'mobile',
    },
    reducers: {
        setDeviceType(state, action) {
            state.deviceType = action.payload;
        },
    },
});

export const { setDeviceType } = DeviceTypeSlice.actions;
export default DeviceTypeSlice.reducer;
