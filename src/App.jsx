import Player from "./Player";
import AddMusic from "./AddMusic";
import Queue from "./Queue";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { heartSVG, plusSVG, queueSVG, youtubeSVG } from "./icons";
import { useRef, useState } from "react";
import axios from "axios";

const App = (props) => {
  const audioRef = useRef();
  const [queue, setQueue] = useState([]);

  const playNow = (track) => {
    setQueue((oldQueue) => {
      return [
        track,
        ...oldQueue.filter((tr) => tr.watch_id !== track.watch_id),
      ];
    });
  };

  const playNext = () => {
    setQueue((oldQueue) => {
      const old = [...oldQueue];
      const first = old.shift();
      old.push(first);
      return old;
    });
    audioRef.current.play();
  };

  const addToQueue = (track) => {
    setQueue((oldQueue) => {
      return [
        ...oldQueue.filter((tr) => tr.watch_id !== track.watch_id),
        track,
      ];
    });
  };

  const handleAddToQueue = (youtubeID) => {
    const exists = queue.find((track) => track.watch_id === youtubeID);
    if (exists) {
      addToQueue(exists);
    } else {
      axios
        .get(`https://wmlhgm.deta.dev/track/${youtubeID}`)
        .then((res) => {
          addToQueue(res.data);
        })
        .catch((err) => console.log("CANNOT"));
    }
  };

  const handlePlayNowClicked = (youtubeID) => {
    const exists = queue.find((track) => track.watch_id === youtubeID);
    if (exists) {
      playNow(exists);
    } else {
      axios
        .get(`https://wmlhgm.deta.dev/track/${youtubeID}`)
        .then((res) => {
          playNow(res.data);
        })
        .catch((err) => console.log("CANNOT"));
    }
  };

  return (
    <div className="app">
      <Router>
        <div className="container">
          <nav className="sidebar">
            <h1 className="logo">
              <img src={youtubeSVG} alt="FYTM Logo" />
              Free YouTube Music
            </h1>
            <Link className="nav-link" to="/add">
              <img className="svg-icon" src={plusSVG} alt="FYTM Logo" />
              Add Music
            </Link>
            <Link className="nav-link" to="/queue">
              <img className="svg-icon" src={queueSVG} alt="FYTM Logo" />
              Queue
            </Link>
            <Link className="nav-link" to="/fav">
              <img className="svg-icon" src={heartSVG} alt="FYTM Logo" />
              My Favorites
            </Link>
          </nav>
          <Routes>
            <Route
              path="/add"
              element={
                <AddMusic
                  queue={queue}
                  handlePlayNowClicked={handlePlayNowClicked}
                  handleAddToQueue={handleAddToQueue}
                />
              }
            />
            <Route
              path="/queue"
              element={
                <Queue
                  queue={queue}
                  handlePlayNowClicked={handlePlayNowClicked}
                />
              }
            />
          </Routes>
        </div>
        <Player audioRef={audioRef} queue={queue} playNext={playNext} />
      </Router>
    </div>
  );
};

export default App;
