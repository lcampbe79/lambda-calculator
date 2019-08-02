import React from "react";

const OperatorButton = ({ operator: {char, value} }) => { //destructured so can use without dot notation when needing objects inside array
  //console.log({operator:char})
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button data-type="operator">{char}</button>
    </>
  );
};

export default OperatorButton;