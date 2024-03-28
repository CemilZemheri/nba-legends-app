import React from "react";
import "./App.css";
import { useState } from "react"
import { data } from "./helper/data";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";


const App = () => {
  const name = data.map((item) => item.name);

  
  const [search, setSearch] = useState("");


  return (
    <div>
      <Header name={name} search={search} setSearch={setSearch}/>
      <CardContainer Data={data} search={search}/>
    </div>
  );
};

export default App;
