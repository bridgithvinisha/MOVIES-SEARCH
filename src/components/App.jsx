import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Avengers");
  const [favourites, setFavourites] = useState([]);
  const [view, setView] = useState("home");

  const API_URL = "https://www.omdbapi.com/?apikey=d3f00a05";

  // 🔍 Fetch movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) setMovies(data.Search);
    else setMovies([]);
  };

  // 🧠 Load favourites from localStorage
  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (savedFavourites) setFavourites(savedFavourites);
  }, []);

  // 💾 Save favourites to localStorage
  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites", JSON.stringify(items));
  };

  // ❤️ Add to favourites
  const addFavouriteMovie = (movie) => {
    const newFavList = [...favourites, movie];
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  };

  // 💔 Remove from favourites
  const removeFavouriteMovie = (movie) => {
    const newFavList = favourites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  // 🎬 Render Section
  const moviesToDisplay = view === "favourites" ? favourites : movies;

  return (
    <div className="App">
      <Navbar onNavigate={setView} />

      <h2>
        {view === "home"
          ? "Welcome to Movie Search App 🎬"
          : "Your Favourite Movies ❤️"}
      </h2>

      {view === "home" && (
        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => searchMovies(searchTerm)}>Search</button>
        </div>
      )}

      {moviesToDisplay.length > 0 ? (
        <div className="container">
          {moviesToDisplay.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavourite={
                favourites.some((fav) => fav.imdbID === movie.imdbID)
              }
              onAdd={addFavouriteMovie}
              onRemove={removeFavouriteMovie}
              view={view}
            />
          ))}
        </div>
      ) : (
        <h3>No movies found</h3>
      )}
    </div>
  );
}

export default App;
