const Track = ({ track, playQueue, setPlayQueue }) => {
  const getAudio = () => {
    setPlayQueue([...playQueue, track.audio_url])
  };

  return (
    <div className="track" onMouseUp={(e) => getAudio()}>
      <img src={track.thumbnail_url} alt={`${track.watch_id}`} />
      <div className="track-details">
        <div className="track-title">{track.title}</div>
        <div className="track-author">{track.author}</div>
      </div>
    </div>
  );
};

export default Track;
