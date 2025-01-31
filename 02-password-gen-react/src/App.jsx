import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let Pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (numberAllowed) str += "!@#$%&*(){}[]~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length - 1);
      Pass += str[char];
    }

    setPassword(Pass);
  }, [length, numberAllowed, setCharAllowed]);

  const copyToClipBord = useCallback(()=> {

    passwordRef.current?.select()
    window.navigator.clipboard.writeText(passwordRef.current?.value).then(()=> {alert("copied succesfully");})


  } ,[password])



  useEffect(()=> {passwordGenerator()} , [length,numberAllowed,charAllowed,passwordGenerator]);

  return (
    <>
      <h1 className="text-white font-bold text-5xl">Password Generator</h1>

      <div className="w-full w-max-md rounded-md m-10 mx-auto p-1 text-orange-500 bg-gray-500">
        <div className="flex  w-full px-2 rounded-l-md">
          <input
            type="text"
            value={password}
            className="outline-none p-1 rounded-l-md mt-2 bg-white text-black w-full"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button

          onClick={copyToClipBord}
          
          className=" bg-green-400 mt-2 text-black font-bold rounded-r-md p-2">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 mt-4 ml-1">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label htmlFor="range"> Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

        </div>
      </div>
    </>
  );
}

export default App;
