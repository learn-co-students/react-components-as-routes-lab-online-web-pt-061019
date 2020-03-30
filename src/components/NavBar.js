import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class NavBar extends React.Component {
  render() {
  return (
    <div className='navbar'>
      <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
                background: 'pink'
            }}
            >Home</NavLink>
      <NavLink
          to="/movies"
          exact
          style={link}
          activeStyle={{
            background: 'pink'
          }}
        >Movies</NavLink>
        <NavLink
          to="/directors"
          exact
          style={link}
          activeStyle={{
            background: 'pink'
          }}
        >Directors</NavLink>
        <NavLink
          to="/actors"
          exact
          style={link}
          activeStyle={{
            background: 'pink'
          }}
        >Actors</NavLink>
    </div>
  );
 }
};

export default NavBar;

{/* <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
</div> */}