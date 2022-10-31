import Player from "./Player";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app">
      <div className="container">
        <div className="sidebar">
          
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
      <Player />
    </div>
  );
};

export default App;
