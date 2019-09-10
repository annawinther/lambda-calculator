import React, { useState } from "react";
import { numbers } from "../../../data";
import {NumbersButton} from "./NumberButton";


//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  console.log(numberState);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map(number => {
         return (
          <NumbersButton 
            Key={number}
            vaule={number}
          />
         )
       })}
    </div>
  );
};

export default Numbers;