import {configureStore} from "@reduxjs/toolkit";
import {informationSlice, pagingSlice} from "./slices"
export default configureStore({
  reducer:{
    information : informationSlice,
    paging: pagingSlice,
  }
});