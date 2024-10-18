import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
};

const ThemeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: getInitialTheme(),
    },
    reducers: {
        setTheme(state, action) {
            if(action.payload === 'dark') state.theme = 'dark';
            if(action.payload === 'light') state.theme = 'light';
        }
    }
});

export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;