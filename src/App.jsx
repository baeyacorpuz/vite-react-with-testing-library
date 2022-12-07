import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Register from "./components/register/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <Register />
    </div>
  );
}

export default App;
