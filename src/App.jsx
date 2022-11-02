import Player from "./Player";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const App = (props) => {
  const [playQueue, setPlayQueue] = useState([]);

  return (
    <div className="app">
      <div className="container">
        <Router>
          <nav className="sidebar">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/my">
              My playlist
            </Link>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <Home playQueue={playQueue} setPlayQueue={setPlayQueue} />
              }
            />
          </Routes>
          <Player playQueue={playQueue} />
        </Router>
      </div>
    </div>
  );
};

export default App;
