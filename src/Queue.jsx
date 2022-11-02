import Track from "./Components/Track";

const Queue = ({ queue }) => {
  return (
    <div className="page__queue">
      <ul>
        {queue.map((track) => (
          <Track key={track.watch_id} track={track} />
        ))}
      </ul>
    </div>
  );
};

export default Queue;
