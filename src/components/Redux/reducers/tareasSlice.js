  import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  toDoList: [],
  show: true,
}
  export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTarea: (state, action) => {
        const newTarea = {
          id: Date.now(),  
          tarea: action.payload.tarea,
        };
        state.toDoList.push(newTarea);
         
      },
       deleteTarea: (state, action) => {
        const id = action.payload.id
        const filterState = state.toDoList.filter((todo)=> todo.id !== id)
        state.toDoList = filterState
      },
      resetTareas: state => {
       const reset = state.push.initialState
       state = reset
      }
    }, 
  });

export const { addTarea, deleteTarea, resetTareas } = todoSlice.actions;

export default todoSlice.reducer;
