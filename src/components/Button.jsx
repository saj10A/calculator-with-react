const Button = (props) => {
  const { value, style, setBtnValue, setBtnClicked } = props;

  return (
    <div
      className={`button ${style ? style : ""}`}
      onClick={() => {
        setBtnValue(value);
        setBtnClicked((prev) => !prev);
      }}
    >
      {value}
    </div>
  );
};

export default Button;
