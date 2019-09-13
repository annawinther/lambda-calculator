import React from "react";

const NumberButton = (props) => {
  // const {value} = props;
  return (
    <button className="numberButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.value}
    </button>
  );
};

export default NumberButton;