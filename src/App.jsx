import Player from "./Player";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <nav className="sidebar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/my">My playlist</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Player />
        </Router>
      </div>
    </div>
  );
};

export default App;
