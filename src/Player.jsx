const Player = ({ audioRef, queue, playNext }) => {
  return (
    <div className="player">
      <audio
        src={queue[0] && queue[0].audio_url}
        onCanPlay={(e) => {
          e.target.play();
        }}
        onEnded={(e) => {
          playNext()
        }}
        ref={audioRef}
      ></audio>
    </div>
  );
};

export default Player;
