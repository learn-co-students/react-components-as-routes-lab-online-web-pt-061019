import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)
  const renderDirectors = () => {
    return directors.map(director => {
      return(
        <div key={director.id}>
          <h2>{director.name}</h2>
          <p>Movies:</p>
          <ul>
            {director.movies.map(movie => <li key={movie.id}>{movie}</li>)}
          </ul>
        </div>
      )
    })
  }


  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
