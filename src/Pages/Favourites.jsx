import React from "react";
import MovieCard from "../components/MovieCard";

function Favourites({ favourites, removeFromFavourites }) {
  return (
    <div className="container">
      <h2>My Favourite Movies ❤️</h2>
      <div className="movie-grid">
        {favourites.length > 0 ? (
          favourites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              handleFavouriteClick={() => removeFromFavourites(movie)}
              favouriteLabel="❌ Remove"
            />
          ))
        ) : (
          <p>No favourites added yet.</p>
        )}
      </div>
    </div>
  );
}

export default Favourites;

