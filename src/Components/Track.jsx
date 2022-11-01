const Track = ({ track }) => {
  return (
    <div className="track" onMouseUp={(e)=>console.log(e.target)}>
      <img src={track.thumbnail_url} alt={`${track.watch_id}`} />
      <div className="track-details">
        <div className="track-title">{track.title}</div>
        <div className="track-author">{track.author}</div>
      </div>
    </div>
  );
};

export default Track;
