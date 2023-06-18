import React from "react";

function Left() {
  return (
    <div>
      <div className="Container w-96 h-screen bg-indigo-950 ">
        <button className="bg-slate-600 h-9 w-52 mt-11 ml-12 pl-3 text-lg rounded-sm text-slate-50 ">
          Search for places
        </button>
        <h1>15 °C</h1>
        <h1>Shower</h1>
        <div className="text-slate-500">
          <p>Today . Fri 5 Jun</p>
        </div>
        <div className="text-slate-500">Helsinki</div>
      </div>
    </div>
  );
}

export default Left;
