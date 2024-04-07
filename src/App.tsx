import { Route, Routes } from "react-router-dom";
import AddTodo from "./component/AddTodo";
import TodoCo from "./component/TodoCo";

import EditTodo from "./component/EditTodo";
import ReactHookForm from "./form/ReactHookForm";
import PracticeForm from "./form/PracticeForm";

// import ZodExample from "../src/form/ZodExample"
import ZodExample from "./form/ZodExamplecopy";
import LoginForm from "./form/LoginForm";


import Home from "../src/pages/home"
import AboutPage from "./pages/aboutpage";
import UserInfoPage from "./pages/userInfopage";

function App() {
  return (
    <div className="flex  h-screen w-full bg-yellow-400   flex-col  items-center ">
      {/* <AddTodo />
      
      <Routes> 
        <Route path="/todoEdit/:id/:name" element={<EditTodo />} />
        <Route path="/todoco" element={<TodoCo />} />
      </Routes>  
      <TodoCo /> */}
      {/* <ZodExample/> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<ZodExample />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home/>} />

        <Route path="/about"  element={<AboutPage/>}/>
        <Route path="/userinfo" element={<UserInfoPage/>}/>
      </Routes>
      {/* <ReactHookForm/> */}
      {/* <PracticeForm/> */}
    </div>
  );
}

export default App;
