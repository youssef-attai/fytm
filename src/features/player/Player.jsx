import ButtonWithIcon from "../../Components/ButtonWithIcon";
import {
  playerNextSVG,
  playerPreviousSVG,
  playerPlaySVG,
  playerPauseSVG,
} from "../../icons";

export function Player(props) {
  return (
    <div className="player">
      <audio
        src={""}
        onCanPlay={(e) => {
          e.target.play();
        }}
        onEnded={(e) => {}}
      ></audio>
      <div className="buttons-group">
        <ButtonWithIcon className="bg-trans" icon={playerPreviousSVG} />
        <ButtonWithIcon
          className="play-btn bg-trans"
          icon={true ? playerPlaySVG : playerPauseSVG}
          onClick={() => {}}
        />
        <ButtonWithIcon className="bg-trans" icon={playerNextSVG} />
      </div>
      <input type="range" />
    </div>
  );
}
