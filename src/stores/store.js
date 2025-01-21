import {configureStore} from "@reduxjs/toolkit";
import {informationSlice, pagingSlice, detailSlice} from "./slices"
export default configureStore({
  reducer:{
    information : informationSlice,
    paging: pagingSlice,
    detail: detailSlice,
  }
});