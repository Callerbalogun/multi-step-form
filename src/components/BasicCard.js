import { useState } from "react";
import Steps from "./Steps";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";
import { useWindowSize } from "@uidotdev/usehooks";

const BasicCard = () => {
  const [currentStep, setCurrentStep] = useState("step 1");
  const [summary, setSummary] = useState({
    user: {
      name: "",
      email: "",
      phone: "",
    },
    plan: {
      sub: "",
      duration: "",
      amount: "",
    },
    addon: [],
  });
  const screenSize = useWindowSize();

  const switchStepHandler = (text) => {
    setCurrentStep(text);
  };
  const saveUserDetails = (userDetails) => {
    setSummary({ ...summary, user: userDetails });
  };
  const savePlan = (plan) => {
    setSummary({
      ...summary,
      plan: {
        sub: plan.sub,
        duration: plan.duration,
        monthlyAmount:
          plan.sub === "Arcade" ? 9 : plan.sub === "Advanced" ? 12 : 15,
        yearlyAmount:
          plan.sub === "Arcade" ? 90 : plan.sub === "Advanced" ? 120 : 150,
      },
    });
  };
  const saveAddOn = (addon) => {
    setSummary({
      ...summary,
      addon: addon,
    });
  };

  let form =
    currentStep === "step 1" ? (
      <FormStep1
        switchStepHandler={switchStepHandler}
        saveUserDetails={saveUserDetails}
      />
    ) : currentStep === "step 2" ? (
      <FormStep2 switchStepHandler={switchStepHandler} savePlan={savePlan} />
    ) : currentStep === "step 3" ? (
      <FormStep3
        summary={summary.plan}
        switchStepHandler={switchStepHandler}
        saveAddOn={saveAddOn}
      />
    ) : currentStep === "step 4" ? (
      <FormStep4 switchStepHandler={switchStepHandler} summary={summary} />
    ) : (
      <FormStep5 summary={summary} />
    );
  let style =
    screenSize.width <= 600
      ? {
          backgroundColor: "hsl(206, 94%, 87%)",
          width: "42px",
          height: "42px",
          border: 0,
          color: "black",
        }
      : {
          backgroundColor: "hsl(206, 94%, 87%)",
          width: "27px",
          height: "27px",
          border: 0,
          color: "black",
        };

  return (
    <div className="basic-card-container">
      <div className="step-container">
        <Steps
          step={1}
          text1="step 1"
          text2="your info"
          style={currentStep === "step 1" ? style : {}}
        />
        <Steps
          step={2}
          text1="step 2"
          text2="select plan"
          style={currentStep === "step 2" ? style : {}}
        />
        <Steps
          step={3}
          text1="step 3"
          text2="add-ons"
          style={currentStep === "step 3" ? style : {}}
        />
        <Steps
          step={4}
          text1="step 4"
          text2="summary"
          style={currentStep === "step 4" ? style : {}}
        />
      </div>
      <div className="form-container">{form}</div>
    </div>
  );
};

export default BasicCard;
