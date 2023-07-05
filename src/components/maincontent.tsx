import { useState } from "react";
// import  FizzBuzzvalue  from "./components/Fizzbuzzlist";


export default function FizzBuzz(): JSX.Element {
    const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
      useState(1);
    const [fizzBuzzValueFromCurrentRender, queueRerenderWithNewFizzBuzzValue] =
      useState<(number|string)[]>([]);


      
    
    
    
      const handleNext = () => {
      queueRerenderWithNewCounterValue(prev => prev + 1)
      queueRerenderWithNewFizzBuzzValue([
        ...fizzBuzzValueFromCurrentRender,
        counterValueFromCurrentRender,
      ]);
    };
    
    return (
      <>
        <h1>FizzBuzz</h1>
        <p>Current number: {counterValueFromCurrentRender}</p>
        <button onClick={handleNext}>Next</button>
        <p>FizzBuzz Array: {fizzBuzzValueFromCurrentRender.map((handleNext, index) => (
        <li key = {index}>{handleNext}</li>))}
        </p>
        
      </>
    );
  }