import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorList = actors.map((actor, index) =>
  <div key={index}>
   <h3>Name: {actor.name}</h3>
   <p>Movies: </p>
   <ul>
      {actor.movies.map((movie,index) => 
      (<li key={index}> {movie} </li>))}
   </ul>
  </div>
  )
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
