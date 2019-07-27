import React from "react";

const OperatorButton = props => {
  console.log(props.charjs)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="Operator">{props.charjs.char}</button>
    </>
  );
};

export default OperatorButton;