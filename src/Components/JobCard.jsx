import React from "react";
import DeleteButton from "./DeleteButton";
import FavButton from "./FavButton";

function JobCard({
  id,
  title,
  location,
  type,
  datePosted,
  remote,
  salary,
  description,
  handleDelete,
  handleFav,
  isFavorite
}) {
  return (
    <div className="relative bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 flex flex-col gap-3 border hover:-translate-y-2">
      <FavButton handleFav={handleFav} id={id} isFavorite={isFavorite} />

      <h2 className="text-xl font-bold text-gray-800">{title}</h2>

      <div className="text-sm text-gray-500 flex flex-wrap gap-2">
        <span>{location}</span>
        <span>• {type}</span>
        {remote && <span className="text-green-600 font-medium">• Remote</span>}
      </div>

      <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      <p className="text-gray-400 text-xs">Posted: {datePosted}</p>

      <div className="flex justify-between text-sm mt-2">
        <span className="text-indigo-600 font-semibold">{salary}</span>
      </div>

      <div className="flex justify-between gap-1">
        <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
          View Job
        </button>
        <DeleteButton handleDelete={handleDelete} id={id} />
      </div>
    </div>
  );
}

export default JobCard;