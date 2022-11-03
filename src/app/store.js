import { configureStore } from "@reduxjs/toolkit";
import addMusicReducer from "../features/addMusic/addMusicSlice";
import playerReducer from "../features/player/playerSlice";
import queueReducer from "../features/queue/queueSlice";

export default configureStore({
  reducer: {
    addMusic: addMusicReducer,
    player: playerReducer,
    queue: queueReducer,
  },
});
