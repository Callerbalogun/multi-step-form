import checkmark from "../assets/images/icon-checkmark.svg";

const Step3Selector = ({
  headerTxt,
  description,
  charge,
  onClick,
  checked,
  style,
}) => {
  return (
    <div className="step-3-form-container" onClick={onClick} style={style}>
      <input type="checkbox" checked={checked} />
      <span className="checkmark">
        <img src={checkmark} alt="checkmark" height={10} width={12} />
      </span>
      <div className="step-3-text-container">
        <p className="step-3-header">{headerTxt} </p>
        <p className="step-3-text">{description} </p>
      </div>
      <span className="step-3-charge">{charge} </span>
    </div>
  );
};

export default Step3Selector;
