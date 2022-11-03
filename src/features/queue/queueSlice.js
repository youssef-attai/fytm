import { createSlice } from "@reduxjs/toolkit";

export const queueSlice = createSlice({
  name: "queue",
  initialState: {
    tracks: [],
    currentIndex: -1,
  },
  reducers: {
    nextInQueue: (state) => {
      state.currentIndex += 1;
    },
    prevInQueue: (state) => {
      state.currentIndex -= 1;
    },
    addTrack: (state, action) => {
      const exists = state.tracks.find(
        (track) => track.watchId === action.payload.watchId
      );
      if (!exists) state.tracks.push(action.payload);
    },
    removeTrack: (state, action) => {
      state.tracks = state.tracks.filter(
        (track) => track.watchId !== action.payload
      );
    },
  },
});

export const { nextInQueue, prevInQueue, addTrack, removeTrack } =
  queueSlice.actions;

export default queueSlice.reducer;
