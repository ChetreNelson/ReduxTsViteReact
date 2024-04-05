import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeTodo, updateTodo } from "../redux/slice/todoSlice";
import { Link } from "react-router-dom";

const TodoCo = () => {
  const value = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();
 
  return (
    <div className="flex flex-col justify-center items-center w-1/2 ">
      <h1>Todos:</h1>
      {value.map((t) => (
        <div
          className="mt-4 p-2 rounded-md w-11/12 bg-black text-white  "
          key={t.id}
        >
          <ul>
            <li className="flex pt-1 justify-between">
              <div className="mt-1 w-32"> {t.text}</div>
              <div className="flex  w-full  justify-end ">
                <Link to={`/todoEdit/${t.id}/${encodeURIComponent(t.text)}`}>
                  <button
                    className="bg-red-500 p-2 mr-2 rounded-md "
                   
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-500 p-2  rounded-md "
                  onClick={() => dispatch(removeTodo(t.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodoCo;
