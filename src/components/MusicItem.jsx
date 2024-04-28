import React from "react";

function MusicItem() {
  return (
    <div className="flex w-96 mt-2 items-center bg-slate-950">
      <img
        className="w-9 h-9"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarNT1dFE8ScGPiVeaFGI16vM8JE-MO3wj7g&usqp=CAU"
        alt="music cover"
      />

      <h4 className="ml-4">Song Title</h4>
      <p className="ml-4 text-sm">5:16</p>
    </div>
  );
}

export default MusicItem;
