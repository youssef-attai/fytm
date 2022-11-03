import { useSelector } from "react-redux";
import Track from "../../Components/Track";

export function Queue() {
  const tracks = useSelector((state) => state.queue.tracks);
  const currentIndex = useSelector((state) => state.queue.currentIndex);
  return (
    <div className="page__queue">
      {tracks.map((track, index) => (
        <Track
          currentlyPlaying={index === currentIndex}
          key={track.watch_id}
          track={track}
        />
      ))}
    </div>
  );
}

export default Queue;
