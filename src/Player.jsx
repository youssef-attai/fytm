const Player = ({ playQueue }) => {
  return (
    <div className="player">
      <audio
        src={playQueue[playQueue.length - 1]}
        onCanPlay={(e) => e.target.play()}
        controls
      ></audio>
    </div>
  );
};

export default Player;
