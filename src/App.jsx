import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Left from "./Components/Left";
import Right from "./Components/Right";
import Search from "./Components/Search";

import axios from "axios";

function App() {
  const key = "9de7ebd2d223fb01c9bead1530d58c84";
  const [WeatherData, setWeatherData] = useState();
  const [city, setCity] = useState("Nagpur");
  const [data, setData] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      )

      .then((res) => setWeatherData(res.data));
  }, [city]);

  return (
    <>
      <div className="flex">
        {data ? (
          <Search value={city} setCity={setCity} setData={setData} />
        ) : (
          <Left WeatherData={WeatherData} setData={setData} />
        )}
        <Right />
      </div>
    </>
  );
}

export default App;
