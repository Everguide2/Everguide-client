import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const cardSlice = createSlice({
  name: 'card',
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
          dDay: action.payload.dDay,
        });
      }

    }
  }
});

export const {add} = cardSlice.actions;
export default cardSlice.reducer;