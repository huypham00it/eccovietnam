import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    status: boolean;
}

const initialState: CartState = {
    status: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.status = !state.status;
        },
    },
});

export const { toggleCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
