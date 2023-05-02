import styled from "styled-components";

export const PokemonContainer = styled.div `

    display: flex;
    flex-direction: column;
    margin: 40px auto;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    background-color: grey;
    border-radius: 20px;
    width: 500px;
    h1{
        text-align: center;
        color: black;
       font-family: Arial, Helvetica, sans-serif;
       font-size: 36px;
    }
`
export const PokemonInput = styled.div `
    display: flex;
    flex-direction: row;
    gap: 20px;
    input{
        padding: 4px;
        text-align: center;
        width: 300px;
    }

`
export const RenderPokemon = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #010329;
 align-items: center;
 justify-content: center;
 border-radius: 20px;
 width: 500px;
 margin: 40px auto;
 h2{
        text-align: center;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
img{
    width: 190px;
}
`
