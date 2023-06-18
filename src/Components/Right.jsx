import React from "react";

function Right() {
  return (
    <div>
      <div className="Container2 bg-blue-950 w-screen h-screen">
        <div className="flex justify-start gap-6 pl-80 pt-40 ">
          <div className="w-36 h-52 bg-indigo-950">
            <h1 className="text-slate-300 text-center pt-4">Tomorrow</h1>
            <div className="flex gap-2 pt-32 pl-9">
              <p className="text-slate-300 ">10°C </p>
              <img src="" alt=""></img>
              <p className="text-slate-500">11°C </p>
            </div>
          </div>

          <div className="w-36 h-52 bg-indigo-950">
            <h1 className="text-slate-300 text-center pt-4"> Sun, 7 Jun</h1>
            <div className="flex gap-2 pt-32 pl-9">
              <p className="text-slate-300 ">10°C </p>
              <p className="text-slate-500">11°C </p>
            </div>
          </div>
          <div className="w-36 h-52 bg-indigo-950">
            <h1 className="text-slate-300 text-center pt-4">Mon, 8 Jun</h1>
            <div className="flex gap-2 pt-32 pl-9">
              <p className="text-slate-300 ">10°C </p>
              <p className="text-slate-500">11°C </p>
            </div>
          </div>
          <div className="w-36 h-52 bg-indigo-950">
            <h1 className="text-slate-300 text-center pt-4"> Tue, 9 Jun</h1>
            <div className="flex gap-2 pt-32 pl-9">
              <p className="text-slate-300 ">10°C </p>
              <p className="text-slate-500">11°C </p>
            </div>
          </div>
          <div className="w-36 h-52 bg-indigo-950">
            <h1 className="text-slate-300 text-center pt-4"> Wed,10 Jun</h1>
            <div className="flex gap-2 pt-32 pl-9">
              <p className="text-slate-300 ">10°C </p>
              <p className="text-slate-500">11°C </p>
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
              <h1 className="text-center text-5xl text-slate-300 pt-5">
                7 mph
              </h1>
              <p className="text-slate-300 text-center pt-4">WSW</p>
            </div>
            <div className="w-96 h-60 bg-indigo-950">
              <p className="text-slate-300 text-center pt-4">Humidity</p>
              <h1 className="text-center text-5xl text-slate-300 pt-5">81%</h1>
            </div>
          </div>
          <div className="box2 pl-80 mt-11 flex gap-9">
            <div className="w-96 h-40 bg-indigo-950">
              <p className="text-slate-300 text-center pt-4">Visibility</p>
              <h1 className="text-center text-5xl text-slate-300 pt-5">
                6,4 miles
              </h1>
            </div>
            <div className="w-96 h-40 bg-indigo-950">
              <p className="text-slate-300 text-center pt-4">Air Pressure</p>
              <h1 className="text-center text-5xl text-slate-300 pt-5">
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
