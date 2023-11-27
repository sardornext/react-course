import { useState } from "react";
import "./App.css";

const message = [
  "Learn the Basics of JavaScript",
  "Understand HTML and CSS",
  "Get Comfortable with ES6+ Features",
  "Learn the Basics of React",
  "Master JSX",
  "Understand React Components",
  "State and Props",
  "Routing in React",
  "State Management",
  "Build Real-World Projects",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        Learn the Basics of JavaScript
        <ul>
          <li>Variables</li>
          <li>Functions</li>
          <li>Objects</li>
          <li>Arrays</li>
          <li>Loops</li>
          <li>Conditionals</li>
        </ul>
      </StepMessage>
      <StepMessage step={2}>
        Understand HTML and CSS
        <ul>
          <li>HTML Tags</li>
          <li>CSS Selectors</li>
          <li>Flexbox</li>
          <li>Grid</li>
          <li>Responsive Design</li>
        </ul>
      </StepMessage>
      <StepMessage step={3}>
        Get Comfortable with ES6+ Features
        <ul>
          <li>Arrow Functions</li>
          <li>Template Literals</li>
          <li>Modules</li>
          <li>Classes</li>
          <li>Async/Await</li>
          <li>Fetch API</li>
        </ul>
      </StepMessage>
      {/* <Steps /> */}
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

          {/* <p className="message">
            <h3>Step {step}</h3>
            {message[step - 1]}
          </p> */}

          <StepMessage step={step}>
            {message[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#7950f2"
                textColor="#fff"
                onClick={() => alert(`Learn how to ${message[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>
              Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next
              <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
