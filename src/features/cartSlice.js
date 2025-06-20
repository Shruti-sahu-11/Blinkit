import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        AddToCart: (state, actions) => {
            const findData = state.cartItems.findIndex((value) => { 
            return value.id === actions.payload.id;
        });

        if(findData!= -1) {
          state.cartItems[findData] = {
             ...state.cartItems[findData],
             quantity:state.cartItems[findData].quantity + 1,
            };
        } else {
          state.cartItems.push({...actions.payload, quantity: 1});
        }

        },

     DeleteItem: (state, actions) => {
        state.cartItems = state.cartItems.filter((value) => {
            return value.id !== actions.payload.id;

     });
     },  
    },
});

export const { AddToCart, DeleteItem } = cartSlice.actions;
export default cartSlice.reducer;