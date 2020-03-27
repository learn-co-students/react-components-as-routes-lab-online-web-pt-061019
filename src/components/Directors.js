import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    // console.log(directors)
    return directors.map(director => {
      return (
        <div>
          <h2>Name: {director.name}</h2>
          <p>Movies:</p>
          <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
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
