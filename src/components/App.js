import "./App.css";
import SearchPanel from "./SearchPanel";
import Movies from "./Movies";
import { useEffect, useState } from "react";
import { fetchMovies } from "../utils/fetchMovies";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetchMovies()
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const toggleFav = (id) => {
    const newMovies = movies.map((el) => {
      if (el.id === +id) {
        return { ...el, liked: !el.liked };
      }

      return el;
    });
    setMovies(newMovies);
  };

  if (isLoading) {
    return <div className="spinner">Loading ...</div>;
  }

  const filteredMovies = searchText
    ? movies.filter((el) => {
        return el.title.toLowerCase().includes(searchText.toLowerCase());
      })
    : movies;

  return (
    <div className="App">
      <SearchPanel searchText={searchText} handleSearch={handleSearch} />
      <Movies movies={filteredMovies} toggleFav={toggleFav} />
    </div>
  );
}

export default App;
