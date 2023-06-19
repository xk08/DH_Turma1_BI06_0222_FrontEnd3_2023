import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";

function App() {

  useEffect(() => {
    console.log("<App /> executou efeito colateral");
    return function unmount() {
      console.log(console.log("<App /> desmontou"));
    }
  }, []);

  return (

    <div className="App">

      {/* Deixar o Context como Provider global de App */}
      <Header />
      <Outlet />
    </div>

  )
}

export default App;