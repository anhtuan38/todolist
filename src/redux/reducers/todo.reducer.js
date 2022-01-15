import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  listTodo: JSON.parse(localStorage.getItem('TodoList')) || [],
  todoDetail:{},
}
export const todoListReducer = createReducer(initialState,{

     "ADD_TODO":(state,action) =>{

      const newList = [...state.listTodo];
      newList.push(action.payload);

      return {
        ...state,
        listTodo: newList
      }
    },
    "EDIT_TODO":(state,action) =>{

      const newList = [...state.listTodo];
      const index= newList.findIndex(item=>item.id === action.payload.id);
      newList[index] = action.payload

      return {
        ...state,
        listTodo: newList
      }
    },
    "DELETE_TODO":(state,action) => {

      const newList = [...state.listTodo];
      const idx = newList.findIndex(item=>item.id===action.payload)
      newList.splice(idx, 1);

      return {
        ...state,
        listTodo: newList,
      }
    },
    "GET_TODO":(state,action) => {

      const newList = [...state.listTodo];

      const idx = newList.findIndex(item=>item.id===action.payload)

      const detailTodo =idx!==-1?newList[idx]:{};

      return {
        ...state,
        todoDetail: detailTodo,
      }
    }

});