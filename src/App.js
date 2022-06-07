import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>React Counter App</h1>
      <h2>{count}</h2>
      <button className="button" onClick={add}>
        +1
      </button>
      <button className="button" onClick={subtract}>
        -1
      </button>
    </div>
  );
}

export default App;
