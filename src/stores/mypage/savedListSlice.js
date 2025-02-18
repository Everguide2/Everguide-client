import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const savedListSlice = createSlice({
  name: "savedList",
  initialState,
  reducers: {
    addSavedList: (state, action) => {
      const isDuplicate = state.some(event => event.id === action.payload.id);
      if(!isDuplicate) {
        state.push({
          id: action.payload.id,
          title: action.payload.title,
          subTitle: action.payload.subTitle,
          assign: action.payload.assign,
          bookMark: action.payload.bookMark,
          category: action.payload.category,
          image: action.payload.image,
          duration: action.payload.duration,
          city: action.payload.city,
          dDay: action.payload.dDay,
        });
      }
    },
    deleteSavedList: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});

export const {addSavedList, deleteSavedList} = savedListSlice.actions;
export default savedListSlice.reducer;