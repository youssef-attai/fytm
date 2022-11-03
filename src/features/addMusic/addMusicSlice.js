import { createSlice } from "@reduxjs/toolkit";

export const addMusicSlice = createSlice({
  name: "addMusic",
  initialState: {
    inputFieldText: "",
    frameSrc: "",
  },
  reducers: {
    updateInputFieldText: (state, action) => {
      state.inputFieldText = action.payload;
    },
    updateFrameSrc: (state, action) => {
      state.frameSrc = action.payload;
    },
  },
});

export const { updateInputFieldText, updateFrameSrc } = addMusicSlice.actions;

export default addMusicSlice.reducer;
