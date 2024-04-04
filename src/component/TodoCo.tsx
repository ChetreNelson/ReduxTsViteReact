import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeTodo } from "../redux/slice/todoSlice";

const TodoCo = () => {
  const value = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col  w-1/2 ">
      <div className="">
        {value.map((t) => (
          <div className="mt-2 p-2 rounded-md bg-black text-white ">
            <ul>
              <li className="flex pt-1 justify-between" key={t.id}>
                {t.text}
                <div className="flex  w-full  justify-end items-end">
                  <button
                    className="bg-red-500 p-2 ml-96 rounded-md "
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
    </div>
  );
};

export default TodoCo;
