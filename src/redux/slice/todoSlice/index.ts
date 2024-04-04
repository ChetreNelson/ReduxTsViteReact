import { createSlice, nanoid } from "@reduxjs/toolkit";

interface TodoState {
  todos: { id: string; text: string }[];
}

// Define initial state
const initialState: TodoState = {
  todos: [{ id: "1", text: "hello" }],
};
export const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      return {
        ...state,
        todos: [...state.todos, todo],
      };
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
