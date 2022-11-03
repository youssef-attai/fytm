import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTrack = createAsyncThunk("queue/addTrack", (watchId) =>
  axios.get(`https://wmlhgm.deta.dev/track/${watchId}`).then((res) => res.data)
);

export const queueSlice = createSlice({
  name: "queue",
  initialState: {
    loading: false,
    errorMsg: "",
    tracks: [],
    currentIndex: -1,
  },
  reducers: {
    nextInQueue: (state) => {
      if (state.currentIndex + 1 < state.tracks.length) state.currentIndex += 1;
      else state.currentIndex = 0;
    },
    prevInQueue: (state) => {
      if (state.currentIndex - 1 >= 0) state.currentIndex -= 1;
      else state.currentIndex = state.tracks.length - 1;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    removeTrack: (state, action) => {
      state.tracks = state.tracks.filter(
        (track) => track.watchId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTrack.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTrack.fulfilled, (state, action) => {
      state.loading = false;
      state.tracks.push(action.payload);
      state.errorMsg = "";
    });
    builder.addCase(addTrack.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.error.message;
    });
  },
});

export const { nextInQueue, prevInQueue, setCurrentIndex, removeTrack } =
  queueSlice.actions;

export default queueSlice.reducer;
