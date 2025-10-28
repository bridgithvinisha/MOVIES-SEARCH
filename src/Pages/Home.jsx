import React from "react";
import MovieCard from "../components/MovieCard";

function Home({ movies, searchTerm, setSearchTerm, searchMovies, addToFavourites }) {
  return (
    <div className="container">
      <h2>Welcome to Movie Search App 🎬</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchMovies(searchTerm)}
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>

      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              handleFavouriteClick={() => addToFavourites(movie)}
              favouriteLabel="❤️ Add to Favourites"
            />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
