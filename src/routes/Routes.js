import { Routes as ReactRoutes, Route} from 'react-router-dom'
import ToDo from '../pages/ToDo/ToDo';
import Home from "../components/Home/Home";
import PokeApi from "../pages/PokeApi/PokeApi";

function Routes() {
    return(
        <>
         <ReactRoutes>
            <Route path="/todolist" element={<ToDo/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokeapi" element={<PokeApi/>}/>
        </ReactRoutes>
        </>
    )
}

export default Routes;