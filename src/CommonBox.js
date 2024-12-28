import React, { useState } from "react";
import ItemsList from './ItemsList';

const CommonBox = ({ title, bridge }) => {
  const [Fruits, setFruits] = useState(
    [
      { id: 1, name: 'Banana', quantity: "12" },
      { id: 2, name: 'Flowers', weight: "0.25" },
      { id: 3, name: 'Oranges', quantity: "10" },
      { id: 4, name: 'Papaya', quantity: "1" },
    ]
  );
  const [Meat, setMeat] = useState(
    [
      { id: 1, name: 'Chicken', weight: "1" },
      { id: 2, name: 'Eggs', quantity: "12" },
      { id: 3, name: 'Fish', weight: "1" },
      { id: 4, name: 'Mutton', weight: "1" }
    ]
  );

  return (
    <div className={`common-box ${title.toLowerCase()}`}>
      <h2>{title}</h2>
      {title == "Fruits" && Fruits.map((F) => (<ItemsList key={F.id} name={F.name} weight={F.weight} quantity={F.quantity} data={bridge} />))}
      {title == "Meat" && Meat.map((M) => (<ItemsList key={M.id} name={M.name} weight={M.weight} quantity={M.quantity} data={bridge} />))}
    </div>
  );
};

export default CommonBox;