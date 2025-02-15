import {configureStore} from "@reduxjs/toolkit";
import informationReducer from "@stores/common/informationSlice";
import savedListReducer from "@stores/mypage/savedListSlice";
import pagingReducer from "@stores/paging/pagingSlice";
import detailReducer from "@stores/common/detailSlice";
import authReducer from '@stores/auth/authSlice';
import alarmReducer from "@stores/alarm/alarmSlice";
import SearchReducer from "@stores/search/SearchSlice";

export default configureStore({
  reducer:{
    information : informationReducer,
    savedList : savedListReducer,
    paging: pagingReducer,
    detail: detailReducer,
    auth: authReducer,
    alarm: alarmReducer,
    Search: SearchReducer,
  }
});
