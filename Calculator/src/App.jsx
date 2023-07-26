import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleButtonPress = (val) => {
    if (input.length < 16) {
      if (input === "0" || input === "Error") {
        setInput(val);
      } else {
        setInput((prevInput) => prevInput + val);
      }
    }
  };

  const handleOperatorPress = (val) => {
    setOperator(val);
    setPrevValue(input);
    setInput("0");
  };

  const calculateResult = () => {
    const currentValue = parseFloat(input);
    const previousValue = parseFloat(prevValue);

    let result;
    switch (operator) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
        result = previousValue - currentValue;
        break;
      case "*":
        result = previousValue * currentValue;
        break;
      case "/":
        result = previousValue / currentValue;
        break;
      default:
        break;
    }

    if (result.toString().length <= 16) {
      setInput(result.toString());
    } else {
      setInput("Error");
    }

    setPrevValue("");
    setOperator("");
  };

  const clearInput = () => {
    setInput("0");
    setPrevValue("");
    setOperator("");
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {/* ตัวเลข 0 - 9 และเครื่องหมาย +, -, *, / */}
        <div className="row">
          <button className="number" onClick={() => handleButtonPress("7")}>
            7
          </button>
          <button className="number" onClick={() => handleButtonPress("8")}>
            8
          </button>
          <button className="number" onClick={() => handleButtonPress("9")}>
            9
          </button>
          <button className="pad" onClick={() => handleOperatorPress("/")}>
            /
          </button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleButtonPress("4")}>
            4
          </button>
          <button className="number" onClick={() => handleButtonPress("5")}>
            5
          </button>
          <button className="number" onClick={() => handleButtonPress("6")}>
            6
          </button>
          <button className="pad" onClick={() => handleOperatorPress("*")}>
            *
          </button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleButtonPress("1")}>
            1
          </button>
          <button className="number" onClick={() => handleButtonPress("2")}>
            2
          </button>
          <button className="number" onClick={() => handleButtonPress("3")}>
            3
          </button>
          <button className="pad" onClick={() => handleOperatorPress("-")}>
            -
          </button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleButtonPress("0")}>
            0
          </button>
          <button className="pad" onClick={() => handleButtonPress(".")}>
            .
          </button>
          <button className="sum" onClick={calculateResult}>
            =
          </button>
          <button className="pad" onClick={() => handleOperatorPress("+")}>
            +
          </button>
        </div>
        {/* ปุ่มล้างค่า */}
        <div className="row">
          <button className="clear" onClick={clearInput}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
