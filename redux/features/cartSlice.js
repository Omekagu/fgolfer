import { createSlice } from '@reduxjs/toolkit';
import data from '../../utils/data';
import { toast } from 'react-toastify';

// let cartContent = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    Items: data.products,
    cartItems:
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
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
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].amount += 1;
        toast.info(`increased ${action.payload.name} quantity`, {
          position: 'bottom-left',
        });
      } else {
        const tempProduct = { ...action.payload };
        state.cartItems.push(tempProduct);

        toast.success(`${action.payload.name} Added`, {
          position: 'bottom-left',
        });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      toast.warning('deleted product  ', {
        position: 'bottom-left',
      });
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    increase: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      toast.info('increased product quantity', {
        position: 'bottom-left',
      });
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
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

      toast.warning('decreased product quantity', {
        position: 'bottom-left',
      });
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const { getCartTotal, remove, increase, decrease, addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
