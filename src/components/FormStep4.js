import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const FormStep4 = ({ switchStepHandler, summary }) => {
  const confirmSubscription = () => {
    if (window.confirm("Confirm subscription plan?")) {
      switchStepHandler("step 5");
    }
  };

  let monthly = summary.plan.duration === "Monthly" && true;
  let amount = monthly ? summary.plan.monthlyAmount : summary.plan.yearlyAmount;
  let totalAmount =
    amount +
    summary.addon.map((item) => item.amount).reduce((acc, cur) => acc + cur, 0);

  return (
    <div>
      <Header
        header="Finishing up"
        text="Double-check everything looks OK before confirming."
      />
      <div className="step-4-main-container">
        <div className="step-4-sub-container">
          <div>
            <p>
              {summary.plan.sub} ({summary.plan.duration})
            </p>
            <button
              className="change-sub-btn"
              onClick={() => switchStepHandler("step 2")}
            >
              Change
            </button>
          </div>
          <span className="step-4-sub-charge">
            +${amount}/{monthly ? "mo" : "yr"}
          </span>
        </div>
        {summary.addon.map((item) => (
          <div className="step-4-addon-container">
            <>
              <p>{item.name} </p>
              <span className="step-4-addon-charge">
                +${item.amount}/{monthly ? "mo" : "yr"}
              </span>
            </>
          </div>
        ))}
      </div>
      <div className="step-4-total-container">
        <p>Total (per {monthly ? "month" : "year"}) </p>
        <span className="step-4-total-charge">
          ${totalAmount}/{monthly ? "mo" : "yr"}
        </span>
      </div>
      <Footer
        text="Confirm"
        switchStepHandler={switchStepHandler}
        step="step 3"
        onClick={confirmSubscription}
      />
    </div>
  );
};

export default FormStep4;
