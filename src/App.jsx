import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Left from "./Components/Left";
import Right from "./Components/Right";
import Search from "./Components/Search";

function App() {
  const [data, setData] = useState(false);

  return (
    <>
      <div className="flex">
        {data ? <Search setData={setData} /> : <Left setData={setData} />}
        <Right />
      </div>
    </>
  );
}

export default App;
