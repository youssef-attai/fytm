import ButtonWithIcon from "./Components/ButtonWithIcon";
import { heartSVG, queueSVG, playSVG } from "./icons";

const AddMusic = (props) => {
  return (
    <div className="page__add-music">
      <h2>Add Music from YouTube to Your Favorites</h2>
      <input type="text" placeholder="Paste YouTube video link here..." />
      <iframe
        className=""
        title="youtubePreview"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
      <div className=" buttons-group">
        <ButtonWithIcon className="bg-black fg-white" icon={playSVG} text="Play now" />
        <ButtonWithIcon className="bg-grey fg-white" icon={queueSVG} text="Add to Queue" />
        <ButtonWithIcon className="bg-red fg-white" icon={heartSVG} text="Add to Your Favorites" />
      </div>
    </div>
  );
};

export default AddMusic;
