import Mycomponent from "./component/Mycomponent";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { addItem } from "./redux/slice/cartSlice";

function App() {
  const count = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleItem = (e: string) => {
    dispatch(addItem(e));
  };

  return (
    <>
      <div className="bg-slate-300 text-white items-center justify-center flex flex-col w-full h-screen p-4">
        <div
          className="w-1/2 h-1/2 bg-slate-500 rounded-xl flex flex-col  items-center justify-center
        
        shadow-purple-600 shadow-xl "
        >
          <h1 className="mb-2 font-serif text-2xl">{count}</h1>
          <div>
            <button
              className="bg-purple-400 rounded-xl p-2 mr-2 "
              onClick={() => handleItem("Harry Potter")}
            >
              Add HarryPotter
            </button>
            <button
              className="bg-purple-400 rounded-xl p-2 mr-2 "
              onClick={() => handleItem("Twilight")}
            >
              Add Twilight
            </button>
            <button
              className="bg-purple-400 rounded-xl p-2 mr-2 "
              onClick={() => handleItem("Harry Potter")}
            >
              Add HarryPotter
            </button>
          </div>
        </div>
      </div>
      <Mycomponent />
    </>
  );
}

export default App;
