import React from "react";
import LateralBar from "./components/LateralBar";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <div className="max-w-full h-screen bg-red-100">
      <div className="flex justify-between w-full">
        <SideBar />
        <Container />
      </div>
      <LateralBar />
    </div>
  );
}

export default App;
