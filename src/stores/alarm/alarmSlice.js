import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const alarmSlice = createSlice({
  name: "alarm",
  initialState,
  reducers: {
    addAlarm: (state, action) => {
      const isDuplicate = state.some(event => event.id === action.payload.id);
      if(!isDuplicate) {
        state.push({
          id: action.payload.id,
          category: action.payload.category,
          type: action.payload.type,
          dDay: action.payload.dDay,
          time: action.payload.time,
          title: action.payload.title,
          description: action.payload.description,
          read: action.payload.read,
        });
      }
    }
  }
});

export const {addAlarm} = alarmSlice.actions;
export default alarmSlice.reducer;