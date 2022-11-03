const Track = ({ track, currentlyPlaying }) => {
  return (
    <div className={`track ${currentlyPlaying ? "track-playing" : ""}`}>
      <img
        className="track-thumbnail"
        src={track.thumbnail_url}
        alt="Track thumbnail"
      />
      <div className="track-details">
        <h3 className="track-title">{track.title}</h3>
        <h4 className="track-author">{track.author}</h4>
      </div>
    </div>
  );
};

export default Track;
