import Button from "./Button";

const Buttons = ({setBtnValue, setBtnClicked}) => {

  const buttonItems = [
    { value: "AC", style: "grid-cols-2" },
    { value: "DEL", style: "" },
    { value: "÷", style: "" },
    { value: '1', style: "" },
    { value: '2', style: "" },
    { value: '3', style: "" },
    { value: "×", style: "" },
    { value: '4', style: "" },
    { value: '5', style: "" },
    { value: '6', style: "" },
    { value: "+", style: "" },
    { value: '7', style: "" },
    { value: '8', style: "" },
    { value: '9', style: "" },
    { value: "-", style: "" },
    { value: ".", style: "" },
    { value: '0', style: "" },
    { value: "=", style: "grid-cols-2" },
  ];

  return (
    <div className="buttons">
      {buttonItems.map((item, index) => (
        <Button
          key={index}
          value={item.value}
          style={item.style}
          setBtnValue={setBtnValue}
          setBtnClicked={setBtnClicked}
        />
      ))}
    </div>
  );
};

export default Buttons;
