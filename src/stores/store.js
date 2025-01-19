import {configureStore} from "@reduxjs/toolkit";
import {cardSlice, pagingSlice} from "./slices"
export default configureStore({
  reducer:{
    card : cardSlice,
    paging: pagingSlice,
  }
});