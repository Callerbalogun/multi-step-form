import IconThankYou from "../assets/images/icon-thank-you.svg";

const FormStep5 = ({ summary }) => {
  let name = summary.user.name.split(" ")[0];

  return (
    <div className="step-5-main-container">
      <img src={IconThankYou} alt="Thank you" />
      <h1>Thank you!</h1>
      <p>
        Thank you {name} for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free to
        contact us at support@loremgaming.com
      </p>
    </div>
  );
};

export default FormStep5;
