import { createSlice } from "@reduxjs/toolkit";

const inventory = createSlice({ 
    name: 'inventory',
    initialState: {},
    reducers: {}
}); 

const {
    // actions, 
    reducer
} = inventory;
// export const { } = actions;
export default reducer;