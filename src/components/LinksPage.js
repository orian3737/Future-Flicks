import React from "react";
import '../css/LinksPage.css';
import Header from './Header'
import NavBar from './NavBar'

function LinksPage() {
  return (
    <div className="main">
     <Header/>
      <NavBar class="nav"/>
    <div className="links">
     
      <h1 class="color" >Links and More!</h1>
      <h4 class="color" >Where to find Your Theatre</h4>
      <ul class="color" > 
        <li><a href="https://www.fandango.com/" target="_blank" rel="noopener noreferrer">Fandango</a></li>
        <li><a href="https://www.amctheatres.com/" target="_blank" rel="noopener noreferrer">AMC Theatres</a></li>
        <li><a href="https://www.regmovies.com/" target="_blank" rel="noopener noreferrer">Regal Cinemas</a></li>
      </ul>

      <h4 class="color" >Streaming Apps</h4>
      <ul class="color" >
        <li><a href="https://www.netflix.com/" target="_blank" rel="noopener noreferrer">Netflix</a></li>
        <li><a href="https://www.hulu.com/" target="_blank" rel="noopener noreferrer">Hulu</a></li>
        <li><a href="https://www.disneyplus.com/" target="_blank" rel="noopener noreferrer">Disney+</a></li>
      </ul>
    </div>
    <div className="image-gallery">
        <div className="images">
          <img src="images/TROB2.jpg" alt="Upcoming Movie 1" />
          <img src="images/SFoG.jpg" alt="Upcoming Movie 2" />
          <img src="images/MI8.jpg" alt="Upcoming Movie 3" />
        </div>
      </div>
    </div>
  );
}

export default LinksPage;
