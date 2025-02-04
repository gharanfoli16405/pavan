import { useState } from "react";
import Add from "./components/Add/Add";

const Test = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <>
      <h1>{step}</h1>
      <Add handleIncrease={setStep} />
    </>
  );
};

export default Test;
