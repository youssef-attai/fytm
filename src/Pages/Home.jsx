import { useState, useEffect } from "react";
import axios from "axios";
import InputWithIcon from "../Components/InputWithIcon";
import Track from "../Components/Track";

const Home = (props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const q = query.split(" ").join("+");
    axios
      .get(`https://wmlhgm.deta.dev/search?q=${q}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className="home">
      <InputWithIcon
        onKeyUpHandler={(e) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            setQuery(e.target.value);
          }
        }}
        icon={"search"}
        placeholder={"Search YouTube"}
      />
      <div className="search-results">
        {results.map((res) => (
          <Track track={res} key={res.watch_id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
