import CustomButton from "./CustomButton";

const Footer = ({ text, switchStepHandler, step, onClick }) => {
  return (
    <div className="footer-container">
      <button className="go-back-btn" onClick={() => switchStepHandler(step)}>
        Go back
      </button>
      <CustomButton text={text} onClick={onClick} />
    </div>
  );
};

export default Footer;
