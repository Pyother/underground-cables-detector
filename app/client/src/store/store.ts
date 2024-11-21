import { configureStore } from '@reduxjs/toolkit';

// * Layout features:
import deviceTypeReducer from '../features/layoutFeatures/DeviceTypeSlice';
import currentSectionReducer from '../features/layoutFeatures/CurrentSectionSlice';

// * Style features:
import themeReducer from '../features/styleFeatures/ThemeSlice';

export const store = configureStore({
    reducer: {
        deviceType: deviceTypeReducer,
        currentSection: currentSectionReducer,
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;