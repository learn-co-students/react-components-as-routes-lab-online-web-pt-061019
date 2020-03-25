import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((a) => (
        <div key={a.name}>
          <h3>{a.name}</h3>
          {a.movies.map((m, index) => (
            <ul key={index}>{m}</ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;
