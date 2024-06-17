import React from "react";
import MovieCard from "./Moviecard";

function MovieList({ movies, searchTerm }) {
  return (
    <ul className="cards">
      {movies
        .filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </ul>
  );
}

export default MovieList;
