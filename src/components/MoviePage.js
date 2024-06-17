import React, { useState, useEffect } from "react";
import NewMovieForm from "./NewMovieForm";
import MovieList from "./MovieList";
import Search from "./Search";

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/movies")  // Ensure this URL is correct
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const formattedData = data.map((movie) => ({
          ...movie
        }));
        setMovies(formattedData);
      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
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
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((movie) => {
        setMovies([...movies, movie]);
      })
      .catch((error) => {
        console.error("Failed to add movie:", error);
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
