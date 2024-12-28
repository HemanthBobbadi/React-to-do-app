import React, { useState } from "react";
import ItemsList from './ItemsList';

const VegetablesSection = ({ bridge }) => {
  const [Vegetables, setVeg] = useState(
    [
      { id: 1, name: 'Brinjal', weight: "0.5" },
      { id: 2, name: 'Carrot', weight: "0.25" },
      { id: 3, name: 'Cabbage', quantity: "1" },
      { id: 4, name: 'Onion', weight: "3" },
      { id: 5, name: 'Potato', weight: "1" },
      { id: 6 , name: 'Tomato', weight: "1" },      
      { id: 7, name: 'Ridge Gourd (Beerakay)', weight: "0.5" },
      { id: 8, name: 'Ivy Guard (Dondakay)', weight: "0.5" },
      { id: 9, name: 'Ladys Finger (Bendakay)', weight: "0.5" },
      { id: 10, name: 'Garlic', weight: "0.25" },
      { id: 11, name: 'Ginger', weight: "0.25" }      
    ]
  );
  return (
    <div className="left-half">
      <h2>Vegetables</h2>
      {Vegetables.map((V) => (<ItemsList key={V.id} name={V.name} weight={V.weight} quantity={V.quantity} data={bridge} />))}
    </div>
  );
};

export default VegetablesSection;