import { configureStore } from '@reduxjs/toolkit';
import deviceTypeReducer from '../features/layoutFeatures/DeviceTypeSlice';

const store = configureStore({
    reducer: {
        deviceType: deviceTypeReducer,
    },
});

export default store;