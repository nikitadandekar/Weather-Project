import Shower from "../Img/Shower.png";
import Cloud from "../Img/Cloud.png";

function Left({ setData, WeatherData }) {
  const handleClick = () => {
    setData(true);
  };
  const date = new Date();
  console.log(date);

  return (
    <div>
      <div className="Container w-96 h-screen bg-indigo-950 ">
        <button
          className="bg-slate-600 h-9 w-52 mt-11 ml-12 pl-3 text-lg rounded-sm text-slate-50 "
          onClick={handleClick}
        >
          Search for places
        </button>
        <img
          src={Cloud}
          alt=""
          className="relative top-8 -left-12 flex justify-between w-72"
        ></img>
        <img src={Shower} alt="" className="relative  left-14 w-56"></img>
        <h1 className=" text-center text-5xl font-bold text-slate-300 pt-11">
          {WeatherData?.main?.temp}
          <>°C</>
        </h1>

        <h1 className="text-slate-300 text-center text-lg pt-11">
          {WeatherData?.weather[0]?.main}
        </h1>
        <div className="text-slate-500 text-center pt-16">
          <p>{WeatherData?.date}</p>
        </div>
        <div className="relative top-14 left-36 ">
          <i className="fa-sharp fa-solid fa-location-dot"></i>
        </div>
        <div className="text-slate-500 pt-9 text-center">
          {WeatherData?.name}
        </div>
      </div>
    </div>
  );
}

export default Left;
