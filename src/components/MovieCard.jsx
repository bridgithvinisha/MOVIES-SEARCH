import React from "react";

const MovieCard = ({ movie, isFavourite, onAdd, onRemove, view }) => {
  return (
    <div className="movie">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x400?text=No+Image"
        }
        alt={movie.Title}
      />
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        {view === "home" ? (
          isFavourite ? (
            <button onClick={() => onRemove(movie)}>Remove ❤️</button>
          ) : (
            <button onClick={() => onAdd(movie)}>Add to ❤️</button>
          )
        ) : (
          <button onClick={() => onRemove(movie)}>Remove ❌</button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;


