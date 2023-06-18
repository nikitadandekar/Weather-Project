import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Left from "./Components/Left";
import Right from "./Components/Right";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <Left />
        <Right />
      </div>
    </>
  );
}

export default App;
