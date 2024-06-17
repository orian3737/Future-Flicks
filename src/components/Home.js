import React from "react";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Future Flicks</h2>
      <p>Stay updated with the latest movies set to release in the next two years. From blockbusters to indie films, we've got you covered!</p>
      <p>Use the search bar to find your favorite upcoming movies, or browse through our curated list of the most anticipated films.</p>
      <div className="features">
        <h3>Features:</h3>
        <ul>
          <li>Up-to-date movie release information</li>
          <li>Director and genre details</li>
          <li>User-friendly search functionality</li>
          <li>Ability to add new movies to the list</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;


