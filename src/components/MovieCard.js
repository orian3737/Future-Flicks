import React, { useState } from "react";

function MovieCard({ id, title, release_date, director, genre }) {
  const [released, setReleased] = useState(true);

  const toggleReleased = () => setReleased(!released);

  return (
    <li className="card" data-testid="movie-item">
      <h4>{title}</h4>
      <p>Release Date: {release_date}</p>
      <p>Director: {director}</p>
      <p>Genre: {genre}</p>
      <button onClick={toggleReleased}>{released ? "Released" : "Not Released"}</button>
    </li>
  );
}

export default MovieCard;
