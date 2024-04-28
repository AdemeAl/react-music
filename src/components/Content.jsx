import React from "react";
import PlaylistContainer from "./PlaylistContainer";
import MoreArtists from "./MoreArtists";

function Content() {
  return (
    <div className="bg-gray-900 h-96 flex justify-between p-4">
      <PlaylistContainer />
      <MoreArtists />
      <Audio/>
    </div>
  );
}

export default Content;
