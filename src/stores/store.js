import {configureStore} from "@reduxjs/toolkit";
import {eventSlice} from "./slices"
export default configureStore({
  reducer:{
    event : eventSlice,
  }
});