import React from "react";

const OperatorButton = (props) => {
  // const {value} = props;
  return (
    <button className="operatorButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.value}
    </button>
  );
};

export default OperatorButton;