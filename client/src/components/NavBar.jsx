import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 py-4 px-6 w-full">
      <div className="flex items-center w-1/6">
        <h1 className="text-white text-lg font-bold">To Do List</h1>
      </div>
    </nav>
  );
}

export default Navbar;