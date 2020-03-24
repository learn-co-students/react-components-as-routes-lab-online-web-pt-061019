import React from 'react';
import { actors } from '../data';

const Actor = (actor) => {
  let movies = actor.movies.map(movie => <li>{movie}</li>)
  return (
    <div key={actor.name}>
        <p>{actor.name}</p>
        <ul>
          {movies}
        </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => Actor(actor))}
    </div>
  );
}

export default Actors;
