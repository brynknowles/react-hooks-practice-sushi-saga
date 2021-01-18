import React from "react";

function Sushi({ name, image, price }) {
  // console.log("Props in Sushi", props)
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${parseInt(price)}
      </h4>
    </div>
  );
}

export default Sushi;
