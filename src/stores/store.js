import {configureStore} from "@reduxjs/toolkit";
import eventReducer from "@stores/common/eventSlice.js";
import eventDetailReducer from "@stores/common/eventDetailSlice.js";
import policyReducer from "@stores/common/policySlice.js";
import policyDetailReducer from "@stores/common/policyDetailSlice.js";
import jobDetailReducer from "@stores/common/jobDetailSlice.js";
import savedListReducer from "@stores/mypage/savedListSlice";
import pagingReducer from "@stores/paging/pagingSlice";
import detailReducer from "@stores/common/detailSlice";
import authReducer from '@stores/auth/authSlice';
import alarmReducer from "@stores/alarm/alarmSlice";
import SearchReducer from "@stores/search/SearchSlice";

export default configureStore({
  reducer:{
    event: eventReducer,
    eventDetail: eventDetailReducer,
    policy: policyReducer,
    policyDetail: policyDetailReducer,
    jobDetail: jobDetailReducer,
    savedList : savedListReducer,
    paging: pagingReducer,
    detail: detailReducer,
    auth: authReducer,
    alarm: alarmReducer,
    Search: SearchReducer,
  }
});
