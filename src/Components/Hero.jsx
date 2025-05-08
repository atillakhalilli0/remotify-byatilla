import React from "react";
import hero from "../assets/hero-img.jpg"
import Input from "./Input";

function Hero({ setSearch }) {
  return (
    <div
      className="relative bg-cover bg-center h-[90vh]"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>

      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white gap-4">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Remotify</h1>
        <p className="text-xl md:text-2xl font-medium">Start searching jobs</p>
        <div className="w-full max-w-md">
            <Input setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
