import React, { useState } from "react";
import { numbers } from "../../../data";
import NumbersButton from "./NumberButton";


//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  console.log(numberState);

  // const { item } = props;
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map((number, index) => {
         return (
          <NumbersButton 
            key={index}
            value={number}
          />
         )
       })}
    </div>
  );
};

export default Numbers;