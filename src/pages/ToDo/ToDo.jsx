import React, { useState } from 'react';
import { ButtonAdd, ButtonReset, ContainerStyled, InputContainer, ToDoUl, TareaLi } from './ToDoStyles';
import { useDispatch, useSelector } from 'react-redux'
import { addTarea, resetTareas, deleteTarea } from '../../components/Redux/reducers/tareasSlice';
import { BsTrash3 } from 'react-icons/bs';

const ToDo = () => {
  const { toDoList, show } = useSelector(state =>({toDoList: state.todos.toDoList,}))
  const dispatch = useDispatch()
  const [valor, setValor] = useState('')

  const HandleChange = (e) => {
    setValor(e.target.value);
    
  };

  const HandleSubmit = (e) =>{
    e.preventDefault();
   if (!valor){
    window.alert('debes ingresar una tarea')
    return;
   };
   if (toDoList.some(todo => todo.tarea.toUpperCase() === valor.toUpperCase())){
    window.alert('esta tarea ya existe')
    setValor('')
    return
   };

  dispatch(addTarea({tarea: valor })) 
  };

  
const HandleReset =() =>{
dispatch(resetTareas());

}

const HandleDelete = e => {
 const id = parseInt(e.target.dataset.id);
  dispatch(deleteTarea({ id: id }))
}

  return (
    <>
      <ContainerStyled>
        <h1>Ingrese una tarea</h1>
        <InputContainer>
          <input
            type="text"
            placeholder="Ingrese una tarea"
            onSubmit={HandleSubmit}
            onChange={HandleChange}
            value={valor}
          />
          <ButtonAdd type='submit' onClick={HandleSubmit}> Agregar</ButtonAdd>
          
          <ButtonReset type="submit" onClick={HandleReset}> Reset</ButtonReset>
        </InputContainer> 
        <ToDoUl> 
          { toDoList.map((tarea) => (
          <TareaLi key={tarea.id} >
            {tarea.tarea}
            <BsTrash3 color="white" data-id={tarea.id} onClick={(e) => HandleDelete(e)} />

          </TareaLi>
          ))}
        </ToDoUl>
      </ContainerStyled>
    </>
  );
};

export default ToDo;
