import React from "react";
import "./calculator.css";
import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    try {
      if (input) {
        let result = eval(input);
        setResult(result);
      } else {
        setResult("Error");
      }
    } catch (e) {
      setResult("Error");
    }
  };
  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      <input type="text" value={input} readOnly />
      <p>{result}</p>
      <div className="buttons">
        <button
          value="7"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          7
        </button>
        <button
          value="8"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          8
        </button>
        <button
          value="9"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          9
        </button>
        <button
          value="+"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          +
        </button>
        <button
          value="4"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          4
        </button>
        <button
          value="5"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          5
        </button>
        <button
          value="6"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          6
        </button>
        <button
          value="-"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          -
        </button>
        <button
          value="1"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          1
        </button>
        <button
          value="2"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          2
        </button>
        <button
          value="3"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          3
        </button>
        <button
          value="*"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          *
        </button>
        <button
          value="C"
          onClick={(e) => {
            setInput("");
            setResult("");
          }}
        >
          C
        </button>
        <button
          value="0"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          0
        </button>
        <button onClick={calculate}>=</button>
        <button
          value="/"
          onClick={(e) => setInput((prev) => prev + e.target.value)}
        >
          /
        </button>
      </div>
    </div>
  );
}

export default Calculator;
