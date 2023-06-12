
import { useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Episodes from "./pages/Episodes";
import NotFound from "./pages/NotFound";
import Locations from "./pages/Locations";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

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
      <Episodes />
      <NotFound />
      <Locations />
      <Characters />
      <Character />
    </div>
  )
}

export default App;