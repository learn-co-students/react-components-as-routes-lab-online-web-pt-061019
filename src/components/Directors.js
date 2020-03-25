import React from 'react';
import { directors } from '../data';

const directorList = directors.map((director, index) =>
<div key={index}>
 <h3>Name: {director.name}</h3>
 <p>Movies: </p>
 <ul>
    {director.movies.map((movie,index) => 
    (<li key={index}> {movie} </li>))}
 </ul>
</div>
)
class Directors extends React.Component {
  render(){
    return (
      <div>
        {/*{code here}*/}
        <h1>Directors Page</h1>
        {directorList}
      </div>
    );
  }
}

export default Directors
