import { useState } from "react";

function asFizzBuzz(num: number) {
  if (isFizzBuzz(num)) {
    return "FizzBuzz";
  } else if (isFizz(num)) {
    return "Fizz";
  } else if (isBuzz(num)) {
    return "Buzz";
  } else {
    return num;
  }
}

const isFizzBuzz = (num: number) => num % 15 === 0;
const isFizz = (num: number) => num % 3 === 0;
const isBuzz = (num: number) => num % 5 === 0;

export default function FizzBuzz(): JSX.Element {
  const [fizzBuzzSequence, setFizzBuzzSequence] = useState<(number | string)[]>(
    [1]
  );

  const handleNext = () => {
    const nextNum: number = fizzBuzzSequence.length + 1;
    setFizzBuzzSequence((fizzBuzzSequence) => [
      ...fizzBuzzSequence,
      asFizzBuzz(nextNum),
    ]);
  };

  return (
    <>
      <h1>Fizz Buzz Generator</h1>
      <hr />
      <p>Fizz Buzz Sequence: {fizzBuzzSequence.join(", ")}</p>
      <hr />
      <button onClick={handleNext}>NEXT</button>
    </>
  );
}
