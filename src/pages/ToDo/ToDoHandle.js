import React from "react";
import { useDispatch } from "react-redux";
import { deleteTarea } from "../Redux/reducers/tareasSlice";
import { BsTrash3 } from 'react-icons/bs';

const ToDoHandle = ({ id, tarea}) =>{
    const dispatch = useDispatch()

    const HandleDelete = () => {
        dispatch(deleteTarea({id: id}))
      }

return (
    <div id={tarea.id} title={tarea}>
              <div>{tarea.tarea}</div>
              <BsTrash3
                color="white"
                 onClick={() => HandleDelete()} 
              /> 
    </div>
)
}

export default ToDoHandle