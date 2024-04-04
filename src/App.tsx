import AddTodo from "./component/AddTodo";
import TodoCo from "./component/TodoCo";

function App() {
  return (
    <>
      <div
        className="bg-slate-300  items-center 
      flex flex-col w-full h-screen p-4"
      >
        <div className="mt-2 mb-10">
          <p>learn about todo</p>
        </div>
        <div>
          <AddTodo />
        </div>

        <TodoCo />
      </div>
    </>
  );
}

export default App;
