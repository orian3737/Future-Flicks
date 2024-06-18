import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../css/LandingPage.css';


function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <div className="welcome-section">
        <h1>Welcome to Future Flicks</h1>
        <p>Discover upcoming movies and more.</p>
        
      </div>
      <div className="intro-section">
        <h2>About Future Flicks</h2>
        <p>
          Future Flicks is your go-to app for discovering the latest movies set to release in the next two years. From blockbusters to indie films, we've got you covered! Stay updated with detailed movie information, release dates, and more.
        </p>
      </div>
      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Up-to-date movie release information</li>
          <li>Detailed information about directors and genres</li>
          <li>User-friendly search functionality</li>
          <li>Ability to add new movies to your watchlist</li>
          <li>Find out where to watch movies in theaters or on streaming platforms</li>
        </ul>
      </div>
      <div className="image-gallery">
        <h2>Popular Upcoming Movies</h2>
        <div className="images">
          <img src="images/ASW.jpg" alt="Upcoming Movie 1" />
          <img src="images/FB4.jpg" alt="Upcoming Movie 2" />
          <img src="images/BM2.jpg" alt="Upcoming Movie 3" />
        </div>
      </div>
      <Link to="/app">
          <button class="button">Enter</button>
        </Link>
    </div>
  );
}

export default LandingPage;
