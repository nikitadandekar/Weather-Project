import React from "react";
import Clear from "../Img/Clear.png";
import Sleet from "../Img/Sleet.png";
import Thunderstorm from "../Img/Thunderstorm.png";
import LightCloud from "../Img/LightCloud.png";
import LightRain from "../Img/LightRain.png";
function Right() {
  return (
    <div>
      <div className="Container2 bg-slate-900 w-screen h-screen">
        <div className="flex justify-start gap-6 pl-80 pt-40 ">
          <div className="w-36 h-60 bg-indigo-950">
            <h1 className="text-slate-300 text-center pt-4">Tomorrow</h1>
            <img src={Clear} alt="" className="w-24 h-20 relative left-5"></img>
            <img
              src={Sleet}
              alt=""
              className="w-24 h-20 relative left-5 bottom-12"
            ></img>
            <div className="flex gap-3 pl-8 ">
              <p className="text-slate-300">16°C</p>
              <p className="text-slate-500 ">11°C</p>
            </div>
          </div>

          <div className="w-36 h-60 bg-indigo-950">
            <h1 className="text-slate-300 text-center pt-4"> Sun, 7 Jun</h1>
            <img src={Clear} alt="" className="w-24 h-20 relative left-5"></img>
            <img
              src={Sleet}
              alt=""
              className="w-24 h-20 relative left-5 bottom-12"
            ></img>
            <div className="flex gap-3 pl-8 ">
              <p className="text-slate-300">16°C</p>
              <p className="text-slate-500 ">11°C</p>
            </div>
          </div>

          <div className="w-36 h-60 bg-indigo-950">
            <h1 className="text-slate-300 text-center pt-4">Mon, 8 Jun</h1>
            <img src={Clear} alt="" className="w-24 h-20 relative left-5"></img>
            <img
              src={Thunderstorm}
              alt=""
              className="w-24 h-20 relative left-5 bottom-12"
            ></img>
            <div className="flex gap-3 pl-8 ">
              <p className="text-slate-300">16°C</p>
              <p className="text-slate-500 ">11°C</p>
            </div>
          </div>

          <div className="w-36 h-60 bg-indigo-950">
            <h1 className="text-slate-300 text-center pt-4"> Tue, 9 Jun</h1>

            <img
              src={LightCloud}
              alt=""
              className="w-24 h-20 relative left-5 top-5"
            ></img>
            <div className="flex gap-3 pl-8 pt-20">
              <p className="text-slate-300">16°C</p>
              <p className="text-slate-500 ">11°C</p>
            </div>
          </div>
          <div className="w-36 h-60 bg-indigo-950">
            <h1 className="text-slate-300 text-center pt-4"> Wed,10 Jun</h1>
            <img
              src={LightRain}
              alt=""
              className="w-24 h-20 relative left-5 top-5"
            ></img>

            <div className="flex gap-3 pl-8 pt-20 ">
              <p className="text-slate-300">16°C</p>
              <p className="text-slate-500">11°C</p>
            </div>
          </div>
        </div>
        <h2 className="mt-8 text-slate-400 font-bold from-neutral-100 text-lg ml-80 mb-6">
          Today's Hightligghts
        </h2>
        <div className="">
          <div className="box1 pl-80 flex gap-9 ">
            <div className="w-96 h-60 bg-indigo-950">
              <p className="text-slate-300 text-center pt-4">Wind Status</p>
              <h1 className="text-center text-5xl font-bold text-slate-300 pt-5">
                7 mph
              </h1>
              <p className="text-slate-300 text-center pt-4">WSW</p>
            </div>
            <div className="w-96 h-60 bg-indigo-950">
              <p className="text-slate-300 text-center pt-4">Humidity</p>
              <h1 className="text-center text-5xl font-bold text-slate-300 pt-5">
                81%
              </h1>
            </div>
          </div>
          <div className="box2 pl-80 mt-11 flex gap-9">
            <div className="w-96 h-40 bg-indigo-950">
              <p className="text-slate-300 text-center pt-4">Visibility</p>
              <h1 className="text-center text-5xl font-bold text-slate-300 pt-5">
                6,4 miles
              </h1>
            </div>
            <div className="w-96 h-40 bg-indigo-950">
              <p className="text-slate-300 text-center pt-4">Air Pressure</p>
              <h1 className="text-center text-5xl font-bold text-slate-300 pt-5">
                998 mb
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
