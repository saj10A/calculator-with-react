import { useState } from "react";
import Output from "./Output";
import Buttons from "./Buttons";

const Calculator = () => {
  const [btnValue, setBtnValue] = useState(null);
  const [btnClicked, setBtnClicked] = useState(false);

  return (
    <div className="calculator">
      <Output btnValue={btnValue} btnClicked={btnClicked} />
      <Buttons setBtnValue={setBtnValue} setBtnClicked={setBtnClicked} />
    </div>
  );
};

export default Calculator;
