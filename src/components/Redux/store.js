import { configureStore } from "@reduxjs/toolkit";
import tareasReducer from "./reducers/tareasSlice"

export default configureStore({
  reducer: {
    todos: tareasReducer,
  }, 
});
