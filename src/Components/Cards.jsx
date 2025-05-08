import React from 'react'
import JobCard from './JobCard';

function Cards({ search, data, setData, fav, setFav }) {
  const filteredJobs = data.filter((job) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return job.title.toLowerCase().includes(searchLower);
  });  

  function handleDelete(id){
    setData(data.filter(item => item.id !== id));
  }

  function handleFav(id){
    setFav([fav, ...{id}])
  }

  return (
    <>
      <div className="w-[80%] mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-20">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard handleDelete={handleDelete} handleFav={handleFav} key={job.id} {...job} />)
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No jobs found matching "{search}"
          </div>
        )}
      </div>
    </>
  )
}

export default Cards