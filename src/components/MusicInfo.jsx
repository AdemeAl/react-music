import React from "react";
import MusicButtons from "./MusicButtons";
function MusicInfo({currentTrack}) {
  return (
    <div className="flex">
      <div>
        
      </div>
      <div className="flex flex-col ml-4">
        <div className="flex items-center ">
          <h3>Album / Song Name</h3>
          <i class="fa-regular fa-heart ml-3 hover:cursor-pointer"></i>
        </div>
        <div className="text-gray-300 text-sm">
          <h3>Artist Name / Singer Collaboration</h3>
        </div>
      </div>
    </div>
  );
}

export default MusicInfo;
