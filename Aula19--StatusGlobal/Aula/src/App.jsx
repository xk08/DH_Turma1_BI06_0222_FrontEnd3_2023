import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";

import { ThemeContext, themes } from "./contexts/ThemeContext.js";
import ThemeConsumer from "./contexts/ThemeConsumer";

function App() {

  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    console.log("Filho disparou a função que troca o tema");
    theme == themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  useEffect(() => {
    console.log("<App /> executou efeito colateral");
    return function unmount() {
      console.log(console.log("<App /> desmontou"));
    }
  }, []);

  return (

    <div className="App">

      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>

        <ThemeConsumer>
          <Header />
          <Outlet />
        </ThemeConsumer>

      </ThemeContext.Provider>


    </div>

  )
}

export default App;