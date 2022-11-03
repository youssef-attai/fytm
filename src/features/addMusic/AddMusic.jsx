import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonWithIcon from "../../Components/ButtonWithIcon";
import { heartSVG, queueSVG } from "../../icons";
import { updateInputFieldText, updateFrameSrc } from "./addMusicSlice";
import { addTrack } from "../queue/queueSlice";

export function AddMusic(props) {
  const inputFieldText = useSelector((state) => state.addMusic.inputFieldText);
  const frameSrc = useSelector((state) => state.addMusic.frameSrc);
  const queueLoading = useSelector((state) => state.queue.loading);
  const queueTracks = useSelector((state) => state.queue.tracks);

  const dispatch = useDispatch();

  useEffect(() => {
    const ytRegex = /\S{11}/;

    if (ytRegex.test(inputFieldText)) {
      dispatch(updateFrameSrc(`https://youtube.com/embed/${inputFieldText}`));
    } else {
      dispatch(updateFrameSrc(""));
    }
  }, [inputFieldText, dispatch]);

  return (
    <div className="page__add-music">
      <h2>Add Music from YouTube to Your Favorites</h2>
      <input
        type="text"
        value={inputFieldText}
        onChange={(e) => {
          const watchId = e.target.value.substring(e.target.value.length - 11);
          dispatch(updateInputFieldText(watchId));
        }}
        onPaste={(e) => {
          e.stopPropagation();
          e.preventDefault();

          const text = e.clipboardData.getData("Text");
          dispatch(updateInputFieldText(text.substring(text.length - 11)));
        }}
        placeholder="Paste YouTube video ID here..."
      />
      <iframe
        title="youtubePreview"
        width="560"
        height="315"
        src={frameSrc}
      ></iframe>
      <div className={`${frameSrc === "" ? "hidden" : ""} buttons-group`}>
        <ButtonWithIcon
          disabled={
            queueLoading ||
            queueTracks.find((track) => track.watch_id === inputFieldText)
          }
          className="big-btn bg-grey fg-white"
          icon={queueSVG}
          text={
            queueLoading
              ? "Adding to Queue"
              : queueTracks.find((track) => track.watch_id === inputFieldText)
              ? "In Queue"
              : "Add to Queue"
          }
          onClick={() => {
            dispatch(addTrack(inputFieldText));
          }}
        />
        <ButtonWithIcon
          className="big-btn bg-red fg-white"
          icon={heartSVG}
          text="Add to Your Favorites"
        />
      </div>
    </div>
  );
}
