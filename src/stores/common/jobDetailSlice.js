import {createSlice} from "@reduxjs/toolkit";

export const jobDetailSlice = createSlice({
  name: "jobDetail",
  initialState: {
    category: "",
    title: "",
    subTitle: "",
    startDate: "",
    endDate: "",
    bookmark: "",
    location: "",
    content: "",
    etcs: "",
    age: "",
    registration: "",
    assigner: "",
    assignNumber: "",
  },
  reducers: {
    addJobArticle: (state, action) => {
      state.category = action.payload.category;
      state.title = action.payload.title;
      state.subTitle = action.payload.subTitle;
      state.content = action.payload.content;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.bookmark = action.payload.bookmark;
      state.location = action.payload.location;
      state.content = action.payload.content;
      state.etcs = action.payload.etcs;
      state.age = action.payload.age;
      state.registration = action.payload.registration;
      state.assigner = action.payload.assigner;
      state.assignNumber = action.payload.assignNumber;
    }
  }
});

export const {addJobArticle} = jobDetailSlice.actions;
export default jobDetailSlice.reducer;