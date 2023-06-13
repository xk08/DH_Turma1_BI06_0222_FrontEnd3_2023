
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";



function App() {

  useEffect(() => {
    console.log("<App /> executou efeito colateral");
    return function unmount() {
      console.log(console.log("<App /> desmontou"));
    }
  }, []);

  return (
    <div className="App">

      <Header />
      <Outlet />
    </div>
  )
}

export default App;