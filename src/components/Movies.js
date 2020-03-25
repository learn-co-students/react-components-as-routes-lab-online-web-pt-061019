import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((m) => (
        <div key={m.title}>
          <h3>{m.title}</h3>
          <h4>Time: {m.time}</h4>
          Genres:
          {m.genres.map((g, index) => (
            <ul key={index}>{g}</ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Movies;
