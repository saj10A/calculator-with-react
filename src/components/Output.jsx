import { useEffect, useState } from "react";

let operator = "";

const Output = ({ btnValue, btnClicked }) => {
  const [currentOp, setCurrentOp] = useState("");
  const [operandsArray, setOperandsArray] = useState([]);
  const [equalClicked, setEqualClicked] = useState(false);

  const handleGetBtnValue = () => {
    switch (btnValue) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
        currentOp.length < 8 && setCurrentOp(currentOp.concat(btnValue));
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
      case "=":
        if (btnValue != "=") operator = btnValue;
        else setEqualClicked(!equalClicked);
        if (currentOp) {
          setOperandsArray([...operandsArray, currentOp]);
          setCurrentOp("");
        }
        break;
      case "AC":
        operator = "";
        setOperandsArray([]);
        setCurrentOp("");
        break;
      case "DEL":
        if (currentOp.length) {
          setCurrentOp(currentOp.slice(0, -1));
        }
        break;
    }
  };

  const decimalLength = (number) => {
    const numberString = number.toString();
    const decimalIndex = numberString.indexOf(".");

    return decimalIndex === -1 ? 0 : numberString.length - decimalIndex - 1;
  };

  const calculate = () => {
    if (operandsArray.length > 1) {
      let res;
      switch (operator) {
        case "+":
          res = Number(operandsArray[0]) + Number(operandsArray[1]);
          break;
        case "-":
          res = operandsArray[0] - operandsArray[1];
          break;
        case "×":
          res = operandsArray[0] * operandsArray[1];
          break;
        case "÷":
          res = operandsArray[0] / operandsArray[1];
          break;
      }      

      decimalLength(res) > 3 ? res = res.toFixed(3) : null;      

      setCurrentOp(res.toString());
      setOperandsArray([]);
    }
  };

  useEffect(() => {
    handleGetBtnValue();
  }, [btnClicked]);

  useEffect(() => {
    calculate();
  }, [equalClicked]);

  return (
    <div className="output">
      <div>{operandsArray.length == 1 ? operandsArray[0] + " " + operator : ""}</div>
      <div className="output__result">{currentOp}</div>
    </div>
  );
};

export default Output;
