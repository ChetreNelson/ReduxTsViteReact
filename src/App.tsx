import { Route, Routes } from "react-router-dom";
import AddTodo from "./component/AddTodo";
import TodoCo from "./component/TodoCo";

import EditTodo from "./component/EditTodo";


function App() {
  return (
    <div className="flex  flex-col justify-center items-center mt-4">
       <AddTodo />
      <Routes> 
        <Route path="/todoEdit/:id/:name" element={<EditTodo />} />
        <Route path="/todoco" element={<TodoCo />} />
      </Routes>  
      <TodoCo />
    </div>
  );
}

export default App;
