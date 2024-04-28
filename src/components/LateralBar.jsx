import React from "react";
import MusicInfo from "./MusicInfo";
import MusicButtons from "./MusicButtons";

function LateralBar() {
  return (
    <div className="absolute bottom-0 w-full h-20 bg-black flex p-4 pb-0">
      <MusicInfo />
      <MusicButtons />
    </div>
  );
}

export default LateralBar;
