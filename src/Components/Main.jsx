import React from "react";
import Cards from "./Cards";
import Hero from "./Hero";
import Footer from "./Footer";

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
      <Footer />
    </>
  );
}

export default Main;
