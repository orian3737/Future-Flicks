import React, { useState, useEffect } from "react";
import NewMovieForm from "./NewMovieForm";
import MovieList from "./MovieList";
import Search from "./Search";

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/movies")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((movie) => ({
          ...movie
        }));
        setMovies(formattedData);
      });
  }, []);

  const addNewMovie = (newMovie) => {
    const formattedMovie = {
      ...newMovie
    };

    fetch("http://localhost:6001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formattedMovie)
    })
      .then((response) => response.json())
      .then((movie) => {
        setMovies([...movies, movie]);
      });
  };

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  return (
    <main>
      <NewMovieForm addNewMovie={addNewMovie} />
      <Search updateSearchTerm={updateSearchTerm} />
      <MovieList movies={movies} searchTerm={searchTerm} />
    </main>
  );
}

export default MoviePage;
