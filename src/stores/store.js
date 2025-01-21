import {configureStore} from "@reduxjs/toolkit";
import {informationSlice, pagingSlice, detailSlice} from "./slices"
import authReducer from './auth/authSlice';
export default configureStore({
  reducer:{
    information : informationSlice,
    paging: pagingSlice,
    detail: detailSlice,
    auth: authReducer,
  }
});
