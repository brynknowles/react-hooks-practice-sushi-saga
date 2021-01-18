import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
// console.log(API)

function App() {
  const [sushis, setSushis] = useState([])

  useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    // .then(data => console.log(data))
    .then(setSushis)
  }, [])

  return (
    <div className="app">
      <SushiContainer sushis={sushis}/>
      <Table />
    </div>
  );
}

export default App;
