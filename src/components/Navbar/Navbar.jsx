import React from 'react';
import { NavbarContainer } from './NavbarStyles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {

  let hayTareas = false;

  const toDoList = useSelector(state => state.todos.toDoList);
  if (toDoList.length) {
    hayTareas = true
  }

  return (
    <NavbarContainer>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="pokeapi">Poke Api</Link>
      </div>
      <div>
        <Link to="todolist" style={ {color: hayTareas ? 'red' : 'white'}} >
        
          To Do List
        </Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
