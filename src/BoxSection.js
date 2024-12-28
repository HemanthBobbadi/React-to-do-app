import React from "react";
import CommonBox from "./CommonBox";

const BoxSection = ({bridge1}) => {
  return (
    <div className="box">
      <CommonBox title="Fruits" bridge={bridge1}/>
      <CommonBox title="Meat" bridge={bridge1}/>
    </div>
  );
};

export default BoxSection;
