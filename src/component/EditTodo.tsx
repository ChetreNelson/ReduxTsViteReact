import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { updateTodo } from "../redux/slice/todoSlice";
const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [text, setInput] = useState("");
  const dispatch = useAppDispatch();
  //setInput(name)
  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    dispatch(updateTodo({ id: id, text: text }));
    navigate("/");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInput(name);
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col mt-2">
      <h1>hello {id} from edit</h1>
      <div className="mb-24 mt-2">
        <form onSubmit={handleEdit}>
          {/* onSubmit={addTodoHandler} */}

          <input
            className="bg-black focus:outline-none text-white rounded-md p-2"
            type="text"
            placeholder="Enter New Todo"
            value={text}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 rounded-md p-2 ml-2
         text-white "
            type="submit"
          >
            Save Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
