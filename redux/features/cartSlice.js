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
          const itemTotal = price * amount;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    addToCart: (state, action) => {
      const temProduct = { ...action.payload, cartQuantity: 1 };
      state.cartItems.push(temProduct);
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.cartItems = state.cartItems
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount != 0);
    },
  },
});

export const { getCartTotal, remove, increase, decrease, addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
