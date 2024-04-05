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
  name: "todos",
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
    updateTodo:(state,action)=>{
        const index = state.todos.findIndex(todo => todo.id == action.payload.id);

        // If the todo item with the given ID exists
        if (index !== -1) {
          // Update the text of the todo item
          state.todos[index].text = action.payload.text;
        }
        
    }
  },
});

export const { addTodo, removeTodo,updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
