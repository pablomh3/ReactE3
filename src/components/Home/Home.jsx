import React from 'react'
import { HomeContainer } from './HomeStyles'


const Home = () => {
  return (
    <>
      <HomeContainer>
        <h1>¡Bienvenido!</h1>
        <h3> El To Do List del Navbar aparecerá en rojo cuando hayan tareas almacenadas</h3>
        <h4>Quizás necesites recargar la página para que cambie de color</h4>
      </HomeContainer>
    </>
    
  )
}

export default Home