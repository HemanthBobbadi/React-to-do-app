import React, { useState } from 'react';
import './App.css';
import VegetablesSection from "./VegetablesSection";
import BoxSection from "./BoxSection";
import ToDoList from "./ToDoList";

function App() {
  const [shell, setShell] = useState("");
  return (
    <div className="container">
      <VegetablesSection bridge={setShell} />
      <BoxSection bridge1={setShell}/>
      <ToDoList data={shell} />
    </div>
  );
}

export default App;
