import { useSelector, useDispatch } from "react-redux";
import ButtonWithIcon from "../../Components/ButtonWithIcon";
import {
  playerNextSVG,
  playerPreviousSVG,
  playerPlaySVG,
  playerPauseSVG,
} from "../../icons";
import { nextInQueue, prevInQueue } from "../queue/queueSlice";
import { play, pause } from "../player/playerSlice";
import { useEffect, useRef } from "react";

export function Player(props) {
  const tracks = useSelector((state) => state.queue.tracks);
  const currentIndex = useSelector((state) => state.queue.currentIndex);
  const playing = useSelector((state) => state.player.playing);
  const audioRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    audioRef.current.src =
      currentIndex >= 0 && currentIndex < tracks.length
        ? tracks[currentIndex].audio_url
        : "";
    if (playing) audioRef.current.play();
    else audioRef.current.pause();
  }, [tracks, currentIndex, playing]);

  return (
    <div className="player">
      <audio
        ref={audioRef}
        src={""}
        onEnded={(e) => {
          dispatch(nextInQueue());
        }}
      ></audio>
      <div className="buttons-group">
        <ButtonWithIcon
          className="bg-trans"
          icon={playerPreviousSVG}
          onClick={() => {
            dispatch(prevInQueue());
          }}
        />
        <ButtonWithIcon
          className="play-btn bg-trans"
          icon={playing ? playerPauseSVG : playerPlaySVG}
          onClick={() => {
            if (!(currentIndex >= 0 && currentIndex < tracks.length))
              dispatch(nextInQueue());

            if (playing) dispatch(pause());
            else dispatch(play());
          }}
        />
        <ButtonWithIcon
          className="bg-trans"
          icon={playerNextSVG}
          onClick={() => {
            dispatch(nextInQueue());
          }}
        />
      </div>
      <input type="range" />
    </div>
  );
}
