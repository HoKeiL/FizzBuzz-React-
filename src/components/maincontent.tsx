import { useState } from "react";
import FizzBuzzvalue from "./Fizzbuzzlist";

export default function FizzBuzz(): JSX.Element {
  const [currentValue, setCurrentVlaue] = useState(1);
  const [list, setList] = useState<(number | string)[]>([]);

  const handleNext = () => {
    setCurrentVlaue((prev) => prev + 1);
    setList([...list, FizzBuzzvalue(currentValue)]);
  };

  return (
    <>
      <h1>FizzBuzz</h1>
      <p>Current number: {currentValue}</p>
      <button onClick={handleNext}>Next</button>

      <p>
        FizzBuzz Array:{" "}
        {list.map((handleNext, index) => (
          <li key={index}>{handleNext}</li>
        ))}
      </p>
    </>
  );
}
