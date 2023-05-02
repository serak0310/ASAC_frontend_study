import logo from "./logo.svg";
import "./App.css";
import Amount from "./Amount";
import ClassLifeCycle from "./ClassLifeCycle";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <Amount amount={10000}/> */}
      <button
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        button
      </button>
      {
        count < 2 && <ClassLifeCycle/>
      }
      {/* <ClassLifeCycle /> */}
    </div>
  );
}

export default App;
