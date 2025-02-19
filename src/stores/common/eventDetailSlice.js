import {createSlice} from "@reduxjs/toolkit";

export const eventDetailSlice = createSlice({
  name: "eventDetail",
  initialState: {
    category: "",
    title: "",
    subTitle: "",
    content: "",
    bookMark:"",
    startDate:"",
    endDate:"",
    fee:"",
    registration:"",
  },
  reducers: {
    addEventArticle: (state, action) => {
      state.category = action.payload.category;
      state.title = action.payload.title;
      state.subTitle = action.payload.subTitle;
      state.content = action.payload.content;
      state.bookMark = action.payload.bookMark;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.fee = action.payload.fee;
      state.registration = action.payload.registration;
    }
  }
});

export const {addEventArticle} = eventDetailSlice.actions;
export default eventDetailSlice.reducer;