import React from 'react';
import '../App.css';
import Header from './Header';
import MoviePage from './MoviePage';
import NavBar from './NavBar';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MoviePage />
      <Footer/>
      
    </div>
  );
}

export default App;
