import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { heartSVG, plusSVG, queueSVG, youtubeSVG } from "./icons";
import { AddMusic } from "./features/addMusic/AddMusic";
import { Player } from "./features/player/Player";
import { Queue } from "./features/queue/Queue";

export function App(props) {
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
            <Route path="/add" element={<AddMusic />} />
            <Route path="/queue" element={<Queue queue={[]} />} />
          </Routes>
        </div>
        <Player />
      </Router>
    </div>
  );
}
