import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  const renderActors = () => {
    return actors.map(actor => {
      return(
        <div key={actor.id}>
            <h2>{actor.name}</h2>
            <p>Movies:</p>
            <ul>
              {actor.movies.map(movie => <li key={movie.id}>{movie}</li>)}
            </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
