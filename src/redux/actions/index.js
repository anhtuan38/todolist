import { createAction } from "@reduxjs/toolkit";

export const addNewTaskAction = createAction("ADD_NEW_TASK");
export const delTaskAction = createAction("DELETE_TASK");
export const editTaskAction = createAction("EDIT_TASK");
