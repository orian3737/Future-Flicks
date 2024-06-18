import React from 'react';
import '../App.css';
import Header from './Header';
import MoviePage from './MoviePage';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MoviePage />
      
    </div>
  );
}

export default App;
