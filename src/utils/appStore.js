import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSclice";
const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default appStore;
