import { useEffect, useState } from "react";
import "./App.css";
import logoCari from "./search.svg";
import FilmCard from "./FilmCard";

const APINYA = "http://www.omdbapi.com/?apikey=62b2600d";

// const dataFilm1 = {
//   Title: "Spiderman in Cannes",
//   Year: "2016",
//   imdbID: "tt5978586",
//   Type: "movie",
//   Poster: "N/A",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const res = await fetch(`${APINYA}&s=${title}`);
    const data = await res.json();
    // console.log(movies);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Aplikasi film</h1>;
      <div className="search">
        <input
          type="text"
          placeholder="Cari Film"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={logoCari}
          alt="CariFilm"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {/* {console.log("data filem : " + movies)} */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((dataFilm) => (
            <FilmCard dataFilm={dataFilm} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>Film Tidak ditemukan</h3>
        </div>
      )}
    </div>
  );
};

export default App;
