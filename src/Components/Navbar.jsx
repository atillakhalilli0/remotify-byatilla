import React, { useState } from "react";
import Logo from "./Logo";
import Input from "./Input";
import { Menu, X } from "lucide-react";

function Navbar({ setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#4E21B7]/90 py-3 fixed top-0 z-10 w-full shadow-2xl">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <div className="w-[180px] my-2">
          <Logo />
        </div>

        <div className="md:hidden">
          {menuOpen ? (
            <X size={28} className="text-white cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu size={28} className="text-white cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        <div className="hidden md:flex md:items-center md:gap-10">
          <ul className="flex gap-6 text-white font-medium text-center">
            <li className="hover:underline cursor-pointer">Remote Jobs</li>
            <li className="hover:underline cursor-pointer">Remote Companies</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
          <div className="ml-6">
            <Input setSearch={setSearch} />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 text-white font-medium text-center">
          <ul className="flex flex-col gap-4">
            <li className="hover:underline cursor-pointer">Remote Jobs</li>
            <li className="hover:underline cursor-pointer">Remote Companies</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
          <div className="mt-4">
            <Input setSearch={setSearch} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
