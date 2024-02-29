const Step2Selector = ({ icon, title, charge, plan, onClick, style }) => {
  return (
    <div className="step-2-selector-container" onClick={onClick} style={style}>
      <img src={icon} alt={title + " icon"} />
      <p className="step-2-selector-text-title">{title} </p>
      <p className="step-2-selector-text-charge">{charge} </p>
      {plan.duration === "Yearly" && (
        <p className="step-2-selector-text-bonus"> 2 months free </p>
      )}
    </div>
  );
};

export default Step2Selector;
