import ButtonWithIcon from "./Components/ButtonWithIcon";
import { heartSVG, queueSVG, playSVG } from "./icons";
import { useRef, useState } from "react";

const AddMusic = ({ handlePlayNowClicked, handleAddToQueue, queue }) => {
  const ytRegex = /\S{11}/;

  const [youtubeID, setYoutubeID] = useState("");
  const youtubeURLRef = useRef();
  const youtubeFrameRef = useRef();
  const [frameSrc, setFrameSrc] = useState("");

  const handleEnterPressed = () => {
    if (ytRegex.test(youtubeURLRef.current.value)) {
      setYoutubeID(youtubeURLRef.current.value);
      setFrameSrc(
        `https://www.youtube.com/embed/${youtubeURLRef.current.value}`
      );
    } else setFrameSrc("");
  };

  return (
    <div className="page__add-music">
      <h2>Add Music from YouTube to Your Favorites</h2>
      <input
        ref={youtubeURLRef}
        type="text"
        onPaste={(e) => {
          e.stopPropagation();
          e.preventDefault();

          const text = e.clipboardData.getData("Text");
          e.target.value = text.substring(text.length - 11);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleEnterPressed();
          }
        }}
        placeholder="Paste YouTube video ID here..."
      />
      <iframe
        ref={youtubeFrameRef}
        className={frameSrc.length === 0 ? "hidden" : ""}
        title="youtubePreview"
        width="560"
        height="315"
        src={frameSrc}
      ></iframe>
      <div className={`${frameSrc.length === 0 ? "hidden" : ""} buttons-group`}>
        <ButtonWithIcon
          disabled={queue[0] && queue[0].watch_id === youtubeID}
          className="bg-black fg-white"
          icon={playSVG}
          text={
            queue[0] && queue[0].watch_id === youtubeID ? "Playing" : "Play now"
          }
          onClick={() => {
            handlePlayNowClicked(youtubeID);
          }}
        />
        <ButtonWithIcon
          className="bg-grey fg-white"
          disabled={queue.find((track) => track.watch_id === youtubeID)}
          icon={queueSVG}
          text={
            queue.find((track) => track.watch_id === youtubeID)
              ? "In queue"
              : "Add to Queue"
          }
          onClick={() => {
            handleAddToQueue(youtubeID);
          }}
        />
        <ButtonWithIcon
          className="bg-red fg-white"
          icon={heartSVG}
          text="Add to Your Favorites"
        />
      </div>
    </div>
  );
};

export default AddMusic;
