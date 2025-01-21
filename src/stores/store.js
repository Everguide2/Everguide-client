import {configureStore} from "@reduxjs/toolkit";
import informationReducer from "@stores/common/informationSlice";
import pagingReducer from "@stores/paging/pagingSlice";
import detailReducer from "@stores/common/detailSlice.js";
import authReducer from '@stores/auth/authSlice';

export default configureStore({
  reducer:{
    information : informationReducer,
    paging: pagingReducer,
    detail: detailReducer,
    auth: authReducer,
  }
});
