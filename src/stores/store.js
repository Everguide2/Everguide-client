import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./SearchSlice";
export default configureStore({
  reducer: {
    Search: SearchReducer,
  },
});
