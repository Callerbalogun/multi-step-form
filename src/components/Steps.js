const Steps = ({ step, text1, text2, style }) => {
  return (
    <div className="single-step-container">
      <div className="step-num-container" style={style}>
        {step}
      </div>
      <div className="step-txt-container">
        <p className="step-txt-1"> {text1} </p>
        <p className="step-txt-2"> {text2} </p>
      </div>
    </div>
  );
};

export default Steps;
