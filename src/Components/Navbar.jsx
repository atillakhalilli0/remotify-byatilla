import React from "react";
import Logo from "./Logo";
import Input from "./Input";

function Navbar({ setSearch }) {
  return (
    <>
      <div className="bg-indigo-600/90 py-3 fixed top-0 z-50 w-full shadow-2xl">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-[180px] my-2">
            <Logo />
          </div>

          <ul className="flex flex-col md:flex-row gap-3 md:gap-10 text-white font-medium text-center">
            <li className="hover:underline cursor-pointer">Remote Jobs</li>
            <li className="hover:underline cursor-pointer">Remote Companies</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>

          <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-2 md:gap-3">
            <Input setSearch={setSearch} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
