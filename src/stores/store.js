import {configureStore} from "@reduxjs/toolkit";
import informationReducer from "@stores/common/informationSlice";
import pagingReducer from "@stores/paging/pagingSlice";
import detailReducer from "@stores/common/detailSlice";
import authReducer from '@stores/auth/authSlice';
import alarmSlice from "@stores/alarm/alarmSlice";
import SearchReducer from "@stores/search/SearchSlice.js";

export default configureStore({
  reducer:{
    information : informationReducer,
    paging: pagingReducer,
    detail: detailReducer,
    auth: authReducer,
    alarm: alarmSlice,
    Search: SearchReducer,
  }
});
