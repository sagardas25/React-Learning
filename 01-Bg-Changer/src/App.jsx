import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen  flex justify-center" style={{ backgroundColor: color }}>
        <div className="flex flex-wrap fixed justify-center px-3 rounded-3xl bottom-12 py-2 bg-white">
          <div className="flex flex-wrap gap-5 justify-center">
            <button className="bg-red-600 p-3 px-5 rounded-3xl font-bold" onClick={() => setColor("red")}>
              Red
            </button>
            <button className="bg-yellow-400 p-3 px-5 rounded-3xl font-bold" onClick={() => setColor("yellow")}>
              yellow
            </button>
            <button className="bg-green-400 p-3 px-5 rounded-3xl font-bold" onClick={() => setColor("green")}>
              green
            </button>
            <button className="bg-blue-500 p-3 px-5 rounded-3xl font-bold" onClick={() => setColor("blue")}>
              blue
            </button>
            <button className="bg-orange-400 p-3 px-5 rounded-3xl font-bold" onClick={() => setColor("orange")}>
              orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
