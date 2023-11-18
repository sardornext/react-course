import { useState } from "react";
import "./App.css";

const message = [
  "Learn React ",
  "Apply knowledge",
  "Build cool stuff",
  "invest your new income",
  "buy Mia khilafa",
  "buy a porn hub premium account",
  "do sex",
  "get a baby",
  "get a more bitches",
  "do more sex",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  //const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 10) setStep(step + 1);
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <h1>10 Steps to become a React Developer</h1>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
            <div className={step >= 5 ? "active" : ""}>5</div>
            <div className={step >= 6 ? "active" : ""}>6</div>
            <div className={step >= 7 ? "active" : ""}>7</div>
            <div className={step >= 8 ? "active" : ""}>8</div>
            <div className={step >= 9 ? "active" : ""}>9</div>
            <div className={step >= 10 ? "active" : ""}>10</div>
          </div>

          <p className="message">
            Step {step}: {message[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#3d5a80", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#3d5a80", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
