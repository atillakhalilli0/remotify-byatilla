import React from "react";
import Cards from "./Cards";
import Hero from "./Hero";

function Main({ search, setSearch, data, setData , fav, setFav }) {
  return (
    <>
      <Hero setSearch={setSearch} />
      <Cards
        search={search}
        data={data}
        setData={setData}
        fav={fav}
        setFav={setFav}
      />
    </>
  );
}

export default Main;
