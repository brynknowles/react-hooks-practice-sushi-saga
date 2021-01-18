import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis }) {
  console.log("Props in SushiContainer: ", sushis)

  const sushisToDisplay = sushis.map((sushi) => {
    return <Sushi key={sushi.id} name={sushi.name} image={sushi.img_url} price={sushi.price} />
  }).slice(0, 4)

  console.log("sushis to display", sushisToDisplay)

  return (
    <div className="belt">
      {sushisToDisplay}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
