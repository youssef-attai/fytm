import axios from "axios";

const Track = ({ track }) => {
  const getAudio = () => {
    axios
      .get(`https://wmlhgm.deta.dev/audio/${track.watch_id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
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
