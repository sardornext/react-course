import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Bill />
    </div>
  );
}

function Bill() {
  const [bill, setBill] = useState("");
  const [service, setService] = useState(0);
  const [service2, setService2] = useState(0);

  const tip = bill * ((service + service2) / 100);

  function handleReset() {
    setBill("");
    setService(0);
    setService2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <ServiceInput percentage={service} onSelect={setService}>
        How did you like the service?
      </ServiceInput>
      <ServiceInput percentage={service2} onSelect={setService2}>
        how did your friend likes the service?
      </ServiceInput>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Button onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function ServiceInput({ children, percentage, onSelect }) {
  return (
    <div className="service">
      <label>{children}</label>

      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
        name=""
        id=""
      >
        <option value="0">It was good(0%)</option>
        <option value="5">It was good(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">It was good(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Button({ onReset }) {
  return (
    <div className="button">
      <button onClick={onReset}>reset</button>
    </div>
  );
}
