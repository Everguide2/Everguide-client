import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const policySlice = createSlice({
  name: 'information',
  initialState,
  reducers: {
    addPolicy : (state, action) => {
      const isDuplicate = state.some(event => event.id === action.payload.id);
      if(!isDuplicate) {
        state.push({
          id: action.payload.id,
          title: action.payload.title,
          subTitle: action.payload.subTitle,
          assign: action.payload.assign,
          bookMark: action.payload.bookMark,
          category: action.payload.category,
          city: action.payload.city,
        });
      }
    },
  }
});

export const {addPolicy} = policySlice.actions;
export default policySlice.reducer;