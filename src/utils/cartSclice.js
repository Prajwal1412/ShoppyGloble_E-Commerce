import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeCart: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addToCart, removeCart, clearCart } = cardSlice.actions;
export default cardSlice.reducer;
