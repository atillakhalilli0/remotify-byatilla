import React, { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Jobs from "./Components/Jobs";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(Jobs);
  const [fav, setFav] = useState([]);
  return (
    <>
      <Header setSearch={setSearch} />
      <Main
        data={data}
        setData={setData}
        search={search}
        setSearch={setSearch}
        fav={fav}
        setFav={setFav}
      />
    </>
  );
}

export default App;
