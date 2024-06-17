import React from "react";
import '../App.css';
import Header from "./Header";
import Home from "./Home";
import MoviePage from "./MoviePage.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <MoviePage />
    </div>
  );
}

export default App;
