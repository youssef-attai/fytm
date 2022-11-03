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
import { useEffect, useRef, useState } from "react";

export function Player(props) {
  const tracks = useSelector((state) => state.queue.tracks);
  const currentIndex = useSelector((state) => state.queue.currentIndex);
  const playing = useSelector((state) => state.player.playing);
  const audioRef = useRef();

  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderDown, setSliderDown] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    audioRef.current.currentTime = 0;
    audioRef.current.src =
      currentIndex >= 0 && currentIndex < tracks.length
        ? tracks[currentIndex].audio_url
        : "";
  }, [tracks, currentIndex]);

  useEffect(() => {
    if (playing) audioRef.current.play();
    else audioRef.current.pause();
  }, [playing]);

  return (
    <div className="player">
      <audio
        ref={audioRef}
        src={""}
        onTimeUpdate={(e) => {
          if (!sliderDown)
            setSliderPosition((e.target.currentTime / e.target.duration) * 100);
        }}
        onCanPlay={(e) => {
          playing && e.target.play();
        }}
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
      <input
        className="player-slider"
        type="range"
        value={sliderPosition}
        min={0}
        max={100}
        onInput={(e) => {
          setSliderPosition(e.target.value);
          if (audioRef.current.duration)
            audioRef.current.currentTime =
              sliderPosition * (audioRef.current.duration / 100);
          else audioRef.current.currentTime = 0;
        }}
        onMouseDown={(e) => {
          setSliderDown(true);
        }}
        onMouseUp={(e) => {
          setSliderDown(false);
          setSliderPosition(e.target.value);
          if (audioRef.current.duration)
            audioRef.current.currentTime =
              sliderPosition * (audioRef.current.duration / 100);
          else audioRef.current.currentTime = 0;
        }}
      />
    </div>
  );
}
