import React, { useState } from "react";

const Moviediscription = ({ title, price, id }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{id}</p>
    </div>
  );
};

export default Moviediscription;
