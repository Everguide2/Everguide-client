import {createSlice} from "@reduxjs/toolkit";

export const policyDetailSlice = createSlice({
  name: "policyDetail",
  initialState: {
    title: "",
    subTitle: "",
    category: "",
    bookMark:"",
    content: "",
    startDate:"",
    endDate:"",
    supplyfor:"",
    standard:"",
    total:"",
    age:"",
    registration:"",
    homepage:[],
  },
  reducers: {
    addPolicyArticle: (state, action) => {
      state.title = action.payload.title;
      state.subTitle = action.payload.subTitle;
      state.category = action.payload.category;
      state.content = action.payload.content;
      state.bookMark = action.payload.bookMark;
      state.content = action.payload.content;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.supplyfor = action.payload.supplyfor;
      state.standard = action.payload.standard;
      state.total = action.payload.total;
      state.age = action.payload.age;
      state.registration = action.payload.registration;
      state.homepage = action.payload.hompage;
    }
  }
});

export const {addPolicyArticle} = policyDetailSlice.actions;
export default policyDetailSlice.reducer;