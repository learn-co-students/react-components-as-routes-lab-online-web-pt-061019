import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d) => (
        <div key={d.name}>
          <h3>Director {d.name}</h3>
          {d.movies.map((m, index) => (
            <ul key={index}>{m}</ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Directors;
