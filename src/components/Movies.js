import React from 'react';
import { movies } from '../data';

const Movie = (movie) => {
  let genres = movie.genres.map(genre => <li>{genre}</li>)
  return (
    <div key={movie.title}>
        <p>{movie.title} - Runtime: {movie.time}</p>
        <ul>
          {genres}
        </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => Movie(movie))}
    </div>
  );
};

// const Movies = () => {
//   return (
//     <div>
//         {/*{code here}*/}
//         <h1>Movies</h1>
//         {movies.map(movie => (
//           <p>{movie.title} - Runtime: {movie.time}</p>
//         ))}
//     </div>
//   );
// };

export default Movies;
