import { createSlice } from '@reduxjs/toolkit';
import data from '../../utils/data';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: data,
    totalAmount: 0,
    totalCount: 8,
  },
  reducers: {},
});

export default cartSlice.reducer;
