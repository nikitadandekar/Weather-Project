import React from "react";

function Left() {
  return (
    <div>
      <div className="Container w-96 h-screen bg-indigo-950 ">
        <button className="bg-slate-600 h-9 w-52 mt-11 ml-12 pl-3 text-lg rounded-sm text-slate-50 ">
          Search for places
        </button>
        <h1 className=" text-center text-8xl text-slate-300 pt-80">15 °C</h1>
        <h1 className="text-slate-300 text-center text-lg pt-11">Shower</h1>
        <div className="text-slate-500 text-center pt-16">
          <p>Today . Fri 5 Jun</p>
        </div>
        <div className="text-slate-500 pt-9 text-center">Helsinki</div>
      </div>
    </div>
  );
}

export default Left;
