import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContextProvider } from "./contexts/Theme";
import ThemeBtn from "./components/Theme";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState('light');

   const darkTheme = () => {
    setThemeMode("dark");
  };
   const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    const container = document.querySelector('html').classList;
    container.remove("light", "dark");
    container.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
