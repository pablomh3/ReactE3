import React, { useState } from 'react';
import { ButtonAdd, ButtonReset, ContainerStyled, InputContainer, ToDoUl, tareaLi } from './ToDoStyles';
import { useDispatch, useSelector } from 'react-redux'
import { addTarea, resetTareas, deleteTarea } from '../../components/Redux/reducers/tareasSlice';
import { BsTrash3 } from 'react-icons/bs';

const ToDo = () => {
  const { toDoList, show } = useSelector(state =>({toDoList: state.todo.toDoList,}))
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
dispatch(show(false));
}

const HandleDelete = e => {
  if (!e.target.class.color('white')) return;

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
          <ButtonAdd type="submit" title='Agregar'/>
          
          <ButtonReset type="button" onClick={HandleReset} title='Reset' />
        </InputContainer> 
        <ToDoUl> 
          { toDoList.map((tarea) => (
          <tareaLi key={tarea.id} >
            {tarea.tarea}
            <BsTrash3 color="white" onClick={() => HandleDelete()} />
          </tareaLi>
          ))}
        </ToDoUl>
      </ContainerStyled>
    </>
  );
};

export default ToDo;
