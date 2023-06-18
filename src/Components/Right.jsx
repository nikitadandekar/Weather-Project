import React from "react";

function Right() {
  return (
    <div>
      <div className="Container2 bg-blue-950 w-screen h-screen">
        <div className="flex justify-start gap-6 pl-80 pt-40 ">
          <div className="w-36 h-52 bg-indigo-950">
            <h1>Tomorrow</h1>
            <div className="flex">
              <p>10°C </p>
              <p>11°C </p>
            </div>
          </div>

          <div className="w-36 h-52 bg-indigo-950">
            <h1> Sun, 7 Jun</h1>
            <div className="flex">
              <p>10°C </p>
              <p>11°C </p>
            </div>
          </div>
          <div className="w-36 h-52 bg-indigo-950">
            <h1>Mon, 8 Jun</h1>
            <div className="flex">
              <p>10°C </p>
              <p>11°C </p>
            </div>
          </div>
          <div className="w-36 h-52 bg-indigo-950">
            <h1> Tue, 9 Jun</h1>
            <div className="flex">
              <p>10°C </p>
              <p>11°C </p>
            </div>
          </div>
          <div className="w-36 h-52 bg-indigo-950">
            <h1> Wed,10 Jun</h1>
            <div className="flex">
              <p>10°C </p>
              <p>11°C </p>
            </div>
          </div>
        </div>
        <h2 className="mt-8 text-slate-400 font-bold from-neutral-100 text-lg ml-80 mb-6">
          Today's Hightligghts
        </h2>
        <div className="">
          <div className="box1 pl-80 flex gap-9 ">
            <div className="w-96 h-60 bg-indigo-950">
              <p>Wind Status</p>
              <h1>7 mph</h1>
              <p>WSW</p>
            </div>
            <div className="w-96 h-60 bg-indigo-950">
              <p>Humidity</p>
              <h1>81%</h1>
            </div>
          </div>
          <div className="box2 pl-80 mt-11 flex gap-9">
            <div className="w-96 h-40 bg-indigo-950">
              <p>Visibility</p>
              <h1>6,4 miles</h1>
            </div>
            <div className="w-96 h-40 bg-indigo-950">
              <p>Air Pressure</p>
              <h1>998 mb</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
