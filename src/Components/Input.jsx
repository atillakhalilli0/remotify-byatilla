import React from "react";

function Input({ setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      onChange={handleChange}
      className="w-full sm:w-[250px] md:w-[300px] border-2 text-white font-medium border-white rounded-2xl px-5 py-1 outline-none bg-transparent placeholder-white"
      placeholder="Search..."
      type="text"
    />
  );
}

export default Input;
