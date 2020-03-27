import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">

    <ul>
      <li>
        <NavLink
          to="/"
          exact
          style={{
            color: 'blue'
          }}
          activeStyle={{
            color: 'purple'
          }}
        >Home</NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          exact
          style={{
            color: 'blue'
          }}
          activeStyle={{
            color: 'purple'
          }}
        >Movies</NavLink>
      </li>
      <li>
        <NavLink
          to="/directors"
          exact
          style={{
            color: 'blue'
          }}
          activeStyle={{
            color: 'purple'
          }}
        >Directors</NavLink>
      </li>
      <li>
        <NavLink
          to="/actors"
          exact
          style={{
            color: 'blue'
          }}
          activeStyle={{
            color: 'purple'
          }}
        >Actors</NavLink>
      </li>
      {/*{code here}*/}
    </ul>
    </div>
  );
};

export default NavBar;
