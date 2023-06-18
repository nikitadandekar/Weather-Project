import React from "react";

function Right() {
  return (
    <div>
      <div className="Container2 bg-blue-950 w-screen h-screen">
        <div className="flex justify-start gap-6 pl-80 pt-40 ">
          <div className="w-36 h-52 bg-indigo-950">Tomorrow</div>
          <div className="w-36 h-52 bg-indigo-950">Sun, 7 Jun</div>
          <div className="w-36 h-52 bg-indigo-950">Mon, 8 Jun</div>
          <div className="w-36 h-52 bg-indigo-950">Tue, 9 Jun</div>
          <div className="w-36 h-52 bg-indigo-950">Wed,10 Jun</div>
        </div>
        <h2 className="mt-8 text-slate-400 font-bold from-neutral-100 text-lg ml-80 mb-6">
          Today's Hightligghts
        </h2>
        <div className="">
          <div className="box1 pl-80 flex gap-9 ">
            <div className="w-96 h-60 bg-indigo-950"></div>
            <div className="w-96 h-60 bg-indigo-950"></div>
          </div>
          <div className="box2 pl-80 mt-11 flex gap-9">
            <div className="w-96 h-40 bg-indigo-950"></div>
            <div className="w-96 h-40 bg-indigo-950"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
