import React, { useEffect, useState } from 'react'
import { PokemonContainer, PokemonInput, RenderPokemon } from './PokeApiStyles'
import axios from 'axios'

const PokeApi = () => {

  const [data, setData] = useState()
  const[nombre, setNombre] = useState()
  const[pokemon, setPokemon] = useState(25)


  const createURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  useEffect(() =>{
    axios.get(createURL).then((response) =>{
      console.log(response.data)
      setData(response.data)
      setNombre(response.data.name)
    }).catch(()=>{
      window.alert('Ingrese un número válido');
    })
  },[createURL])

  const handleChange = (e) =>{
    
    setPokemon(e.target.value)
  }
  const handleEmpty = (e) => {

  }

  return (
    <>
    <PokemonContainer>
     <h1>¡Buscá tu Pokémon!</h1>
      <PokemonInput>
        <input type={"number"} 
        placeholder='escribe el número de ID de un Pokémon'
        onChange={handleChange}
        onEmptied={handleEmpty}
        />
      </PokemonInput>
    </PokemonContainer>
{
  pokemon ?  <RenderPokemon>
  <div>
    
    <h2>{nombre}</h2>
    <img src={data ? data.sprites.front_default: '<p>Pokemon no encontrado</p>'}
   alt='Pokemon'/>
  </div>
</RenderPokemon> : <span></span>
}
   
  </>
    
  )
}

export default PokeApi