import { createSlice } from "@reduxjs/toolkit";
import { formattedDate } from "../../utils/customFunctions";
import { todo } from "../../utils/types";
const initialState = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newItem = {
        id: state.todos.length ? state.todos.at(-1).id + 1 : 1,
        title: action.payload,
        isCompleted: false,
        isStarred: false,
        created_at: formattedDate(),
      };
      state.todos.push(newItem);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const todo = state.todos.find(
        (todo: todo) => todo.id == action.payload.id
      );
      todo.title = action.payload.title;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editIsCompleted: (state, action) => {
      const todo = state.todos.find(
        (todo: todo) => todo.id == action.payload.id
      );
      todo.isCompleted = action.payload.isCompleted;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo: todo) => todo.id != action.payload
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export default createSlice;
export const { addTodo, deleteTodo, editTodo, editIsCompleted } =
  todoSlice.actions;
