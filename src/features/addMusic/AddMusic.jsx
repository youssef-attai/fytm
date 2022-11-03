import ButtonWithIcon from "../../Components/ButtonWithIcon";
import { heartSVG, queueSVG, playSVG } from "../../icons";

export function AddMusic(props) {
  // const ytRegex = /\S{11}/;
  

  return (
    <div className="page__add-music">
      <h2>Add Music from YouTube to Your Favorites</h2>
      <input
        type="text"
        onPaste={(e) => {
          e.stopPropagation();
          e.preventDefault();

          const text = e.clipboardData.getData("Text");
          e.target.value = text.substring(text.length - 11);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
          }
        }}
        placeholder="Paste YouTube video ID here..."
      />
      <iframe title="youtubePreview" width="560" height="315" src={""}></iframe>
      <div className={`buttons-group`}>
        <ButtonWithIcon
          className="big-btn bg-black fg-white"
          icon={playSVG}
          text={"Play now"}
          onClick={() => {}}
        />
        <ButtonWithIcon
          className="big-btn bg-grey fg-white"
          icon={queueSVG}
          text={"Add to Queue"}
          onClick={() => {}}
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
