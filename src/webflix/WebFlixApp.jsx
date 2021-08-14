import React from "react";
import ListaPeliculas from "./ListaPeliculas";
import movies from "./wedflix";

const WebFlixApp = () => {
  ;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Bienvenido a WebFlix</h1>
          <hr />
          <h3>Peliculas</h3>

          {/* lista de peliculas */}

          <ListaPeliculas peliculas = {movies}/>
          {/* <ul>
            {movies.map(pelicula =>{
              return <li key={pelicula.id}>{pelicula.title} - {pelicula.year}</li>
            })}
          </ul> */}
  
        </div>
      </div>
    </div>
  );
};

export default WebFlixApp;
