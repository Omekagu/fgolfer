import { createSlice } from '@reduxjs/toolkit';
import data from '../../utils/data';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    Items: data.products,
    cartItems: [],
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    getCartTotal: (state) => {
      let { totalAmount, totalCount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const cartItemTotal = price * amount;
          cartTotal.totalAmount += cartItemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    increase: (state, action) => {
      state.cartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
    },
    decrease: (state, action) => {
      state.cartItems = state.cartItems
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount != 0);
    },
  },
});

export const { getCartTotal, remove, increase, decrease, addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
