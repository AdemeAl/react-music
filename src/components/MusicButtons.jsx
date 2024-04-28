import React, { useRef, useState } from "react";
import { tracks } from '../assets/track';


function MusicButtons() {
  
  
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  
  
  
  
  
  
  
  return (
    <div className=" ml-16 flex w-full">
      <audio src={currentTrack.src}></audio>
      <div className="flex flex-col w-full">
        <div className="flex justify-center ml-3 text-xl items-center">
          <i class="fa-solid fa-shuffle ml-4 hover:cursor-pointer text-gray-400"></i>
          <i class="fa-solid fa-backward-step ml-4 hover:cursor-pointer "></i>
          <i class="fa-solid fa-circle-play ml-4 hover:cursor-pointer text-2xl t-1 hover:scale-105" ></i>
          <i class="fa-solid fa-pause ml-4 hover:cursor-pointer hover:scale-105" ></i>
          <i class="fa-solid fa-forward-step ml-4 hover:cursor-pointer text-gray-400"></i>
          <i class="fa-solid fa-repeat ml-4 hover:cursor-pointer text-lg text-gray-400"></i>
        </div>
        <div className="flex items-center mt-1">
          <p className="mr-2 text-xs">1:09</p>
          

          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-800">
            <div className="bg-gray-400 h-2 rounded-full w-1/4"></div>
          </div>
          <p className="text-xs ml-2">4:01</p>
        </div>
      </div>
      <div className="flex  items-center ml-8">
        <i class="fa-solid fa-align-left ml-2"></i>
        <i class="fa-solid fa-tv ml-2"></i>
        <i class="fa-solid fa-volume-low ml-2 mr-2"></i>
        <div className="w-16  bg-gray-200 rounded-full h-2 dark:bg-gray-800">
          <div className="bg-gray-400 h-2 rounded-full w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

export default MusicButtons;
