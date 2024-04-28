import React from "react";
function SideBar() {
  return (
    <div className="w-1/5 bg-black h-screen flex flex-col pt-14 items-center ">
      <div className="font-serif text-2xl">ADM MUSIC </div>
      <div className="mt-7 text-lg text-gray-00">
        <h3 className="mt-1 cursor-pointer hover:text-white">
          <i className="fa-solid fa-house mr-2"></i> Home
        </h3>
        <h3 className="mt-1 cursor-pointer hover:text-white">
          <i className="fa-solid fa-radio mr-2"></i> Radio
        </h3>
        <h3 className="mt-1 cursor-pointer hover:text-white">
          <i className="fa-solid fa-magnifying-glass mr-2"></i> Search
        </h3>
      </div>
      <div className="mt-9">
        <h3 className="text-lg">
          <i className="fa-solid fa-lines-leaning mr-2"></i> Bibliothèque
        </h3>
        <div className="m-3 text-gray-400">
          <a className="group transition duration-300 no-underline  hover:text-white" href="#">
            Podcasts English 📖
            <span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-300"></span>
          </a>
          <a className="group  transition duration-300 no-underline hover:text-white" href="#">
            Recently Played 🎧
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-300"></span>
          </a>
          <a className="group  transition duration-300 no-underline hover:text-white" href="#">
            Favorites Reciters
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-300"></span>
          </a> hover:text-white
          <a className="group  transition duration-300 no-underline hover:text-white" href="#">
            Juzz 30
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-300"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
