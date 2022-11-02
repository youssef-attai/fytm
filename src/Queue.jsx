import Track from "./Components/Track";

const Queue = ({ queue }) => {
  return (
    <div className="page__queue">
      {queue.length === 0 && <h3>The queue is empty...</h3>}
      <ul>
        {queue.map((track) => (
          <Track key={track.watch_id} track={track} />
        ))}
      </ul>
    </div>
  );
};

export default Queue;
