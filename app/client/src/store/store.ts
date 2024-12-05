import { configureStore } from '@reduxjs/toolkit';

// * Layout features:
import deviceTypeReducer from '../features/layoutFeatures/DeviceTypeSlice';
import currentSectionReducer from '../features/layoutFeatures/CurrentSectionSlice';

// * Style features:
import themeReducer from '../features/styleFeatures/ThemeSlice';

// * Network features:
import connectionReducer from '../features/networkFeatures/ConnectionSlice';
import wifiQualityReducer from '../features/networkFeatures/WiFiQualitySlice';

// * Device state features:
import energyReducer from '../features/deviceStateFeatures/EnergySlice';

// * Data features:
import basicDataReducer from '../features/dataFeatures/BasicDataSlice';

export const store = configureStore({
    reducer: {
        deviceType: deviceTypeReducer,
        currentSection: currentSectionReducer,
        theme: themeReducer,
        connection: connectionReducer,
        energy: energyReducer,
        wifi: wifiQualityReducer,
        basicData: basicDataReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;