import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="flex w-full" style={{ backgroundColor: "#999999" }}>
        <Navbar />
        <div className="w-full mx-auto py-8 px-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
