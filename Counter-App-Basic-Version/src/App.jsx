import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  //let counter = 5;
  const addValue = () => {
    if (counter >= 20) {
      return;
    }
    setCounter(++counter);
  };

  const removeValue = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(--counter);
  };

  return (
    <>
      <h1>Counter-App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
