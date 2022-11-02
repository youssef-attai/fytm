const Track = ({ track }) => {
  return (
    <div className="track">
      <img className="track-thumbnail" src={track.thumbnail_url} alt="Track thumbnail" />
      <h3 className="track-title">{track.title}</h3>
      <h4 className="track-author">{track.author}</h4>
    </div>
  );
};

export default Track;
