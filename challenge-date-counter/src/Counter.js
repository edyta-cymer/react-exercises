import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("june 27 2023");
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div>
        <button className="btn" onClick={() => setStep((c) => c - 1)}>
          -
        </button>
        <span className="span">Steps: {step}</span>
        <button className="btn" onClick={() => setStep((c) => c + 1)}>
          +
        </button>
      </div>
      <div>
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <span className="span">Count: {count}</span>
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          +
        </button>

        <h2 className="data">
          {" "}
          {count === 0
            ? "Today is: "
            : count > 0
            ? `${count} days from today is: `
            : `${Math.abs(count)} days ago was: `}
          {date.toDateString()}
        </h2>
      </div>
    </div>
  );
}

export default Counter;
