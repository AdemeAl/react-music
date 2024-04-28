import React from "react";

function TitleInfo() {
  return (
    <div className="flex flex-col ml-7">
      <h1 className="text-5xl font-bold">Maher Al-Muayqli</h1>
      <div className="flex items-center font-semibold">
        <div className="cursor-pointer hover:scale-105 text-xs p-2 h-8 text-center w-24 m-2 bg-lime-500 rounded-3xl ">
          <h3>PLAY</h3>
        </div>
        <div className="cursor-pointer hover:scale-105 text-xs text-center p-2 h-8 w-24 m-2 bg-lime-500 rounded-3xl">
          <h3>FOLLOW</h3>
        </div>
        <div className="cursor-pointer hover:scale-105"> 
            <i class="fa-solid fa-ellipsis m-4  bg-transparent leading-relaxed text-center justify-center w-8 h-8 rounded-full border-solid border-2 border-gray-800 "></i>
        </div>
      </div>
        
        
    </div>
  );
}

export default TitleInfo;
