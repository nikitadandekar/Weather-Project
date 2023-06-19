import React from "react";

function Search({ setData }) {
  const handleClick = () => {
    setData(false);
  };
  return (
    <div>
      <div className="Container w-96 h-screen bg-indigo-950 ">
        <div
          className="text-white absolute left-80 top-8 w-20 h-12 "
          onClick={handleClick}
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div className="absolute top-20 left-14">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          type="text"
          placeholder="Search location"
          className="bg-slate-500 mt-16 w-52 h-12 ml-12 pl-11 text-slate-700"
        ></input>

        <button className="bg-sky-600 h-12 w-20 ml-4 text-white">Search</button>
      </div>
    </div>
  );
}

export default Search;
