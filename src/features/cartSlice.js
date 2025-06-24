import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    PriceTotal: 0,
    QuantityTotal: 0,
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
     
     CartTotal: (state) => {
        const { totalPrice, totalQuantity } = state.cartItems.reduce((cartTotal, cartItems) => {
            const {price, quantity} = cartItems;
            const itemTotal = parseFloat(price)* parseInt(quantity);
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += quantity;
            return cartTotal;
        }, 
        {
            totalPrice: 0,
            totalQuantity: 0
        }
      );
      state.PriceTotal = totalPrice;
      state.QuantityTotal = totalQuantity;
     },
    },
});

export const { AddToCart, DeleteItem, CartTotal } = cartSlice.actions;
export default cartSlice.reducer;