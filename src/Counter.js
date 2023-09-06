import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleStep = (operator) => {
    operator === "+" ? setStep((s) => s + 1) : setStep((s) => s - 1);
  };

  const handleCount = (operator) => {
    operator === "+" ? setCount((s) => s + step) : setCount((s) => s - step);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => handleStep("-")}>-</button>Step: {step}
        <button onClick={() => handleStep("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleCount("-")}>-</button>Count:{count}
        <button onClick={() => handleCount("+")}>+</button>
      </div>
      <div>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </div>
    </div>
  );
}
