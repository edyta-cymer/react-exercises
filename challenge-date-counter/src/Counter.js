import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("june 27 2023");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
    // console.log("Tak udalo sie zresetowac");
  }

  return (
    <div className="container">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>

        <span className="span">Steps: {step}</span>
      </div>
      <div>
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>

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

        {count !== 0 || step !== 1 ? (
          <div>
            <button className="btn" onClick={(e) => handleReset()}>
              RESET
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Counter;
