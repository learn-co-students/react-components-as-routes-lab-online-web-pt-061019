import React from 'react';
import { directors } from '../data';

const Director = (director) => {
  let movies = director.movies.map(movie => <li>{movie}</li>)
  return (
    <div key={director.name}>
        <p>{director.name}</p>
        <ul>
          {movies}
        </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => Director(director))}
    </div>
  );
}

export default Directors
