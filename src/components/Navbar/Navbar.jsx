import React from 'react';
import { NavbarContainer } from './NavbarStyles';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="pokeapi">Poke Api</Link>
      </div>
      <div>
        <Link to="todolist">
          To Do List
        </Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
