import { createAction } from "@reduxjs/toolkit";

export const addNewTodo= createAction("ADD_TODO");
export const getTodo= createAction("GET_TODO");
export const editTodo = createAction("EDIT_TODO");
export const deleteTodo = createAction("DELETE_TODO");
