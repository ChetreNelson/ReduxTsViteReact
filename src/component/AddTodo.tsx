import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addTodo } from "../redux/slice/todoSlice";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="mb-10">
      <form onSubmit={addTodoHandler}>
        <input
          className="bg-black focus:outline-none text-white rounded-md p-2"
          type="text"
          placeholder="Enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 rounded-md p-2 ml-2
         text-white "
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
