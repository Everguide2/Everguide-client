import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const informationSlice = createSlice({
  name: 'information',
  initialState,
  reducers: {
    add : (state, action) => {
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
  }
});

export const {add} = informationSlice.actions;
export default informationSlice.reducer;