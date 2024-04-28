import React from "react";

function MoreArtists() {
  return (
    <div className="flex flex-col mr-36 p-4">
      <div className="flex items-center">
        <img
          className="w-9 h-9 rounded-full object-cover"
          src="https://pennyappeal.ca/wp-content/uploads/2023/06/mprofilenew.png"
          alt=""
        />
        <p className="ml-4">Mishary Alafasy</p>
      </div>
      <div className="mt-3 flex items-center">
        <img
          className="w-9 h-9 rounded-full object-cover"
          src="https://timelinedaily.com/uploads/2023/11/Untitled-2.jpg"
          alt=""
        />
        <p className="ml-4">Abd Rahman Sudais</p>
      </div>
    </div>
  );
}

export default MoreArtists;
