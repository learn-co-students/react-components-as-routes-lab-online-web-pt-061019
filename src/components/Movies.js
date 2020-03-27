import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = () => {
    // console.log(movies)
    return movies.map(movie => {
      return (
        <div>
          <h2>Name: {movie.title}</h2>
          <p>Time: {movie.time} </p>
          <p>Movies:</p>
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
