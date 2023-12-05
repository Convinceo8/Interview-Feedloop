import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-gray-600">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
