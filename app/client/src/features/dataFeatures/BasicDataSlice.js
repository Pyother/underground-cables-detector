import { createSlice } from '@reduxjs/toolkit';

const BasicDataSlice = createSlice({
    name: 'basicData',
    initialState: {
        data: []
    },
    reducers: {
        setBasicData: (state, action) => {
            state.data = action.payload;
            state.data = state.data.filter((item, index, self) => 
                index === self.findIndex((t) => t.rideId === item.rideId)
            );
        }
    }
})

export const { setBasicData } = BasicDataSlice.actions;
export default BasicDataSlice.reducer;