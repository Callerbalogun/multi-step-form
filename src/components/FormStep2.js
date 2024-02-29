import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Step2Selector from "./Step2Selector";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import { MdToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";

const FormStep2 = ({ switchStepHandler, savePlan }) => {
  const [plan, setPlan] = useState({
    sub: "",
    duration: "Monthly",
  });
  const [error, setError] = useState({
    state: false,
    message: "Please select a plan",
    style: {
      borderColor: "hsl(354, 84%, 57%)",
    },
  });

  const selectSub = (sub) => {
    setPlan({ ...plan, sub: sub });
  };
  const selectDuration = (duration) => {
    setPlan({ ...plan, duration: duration });
  };
  const savePlanHandler = () => {
    if (plan.sub) {
      savePlan(plan);
      switchStepHandler("step 3");
    } else {
      setError({ ...error, state: true });
    }
  };

  let yearly = plan.duration === "Yearly" && true;
  let style = {
    border: "1px solid hsl(243, 100%, 62%)",
    backgroundColor: "hsl(206, 94%, 87%)",
  };

  return (
    <div>
      <Header
        header="Select your plan"
        text="You have the option of monthly or yearly billing."
      />
      <div className="form-step-2-selector-container">
        <Step2Selector
          title="Arcade"
          charge={yearly ? "$90/yr" : "$9/mo"}
          icon={arcadeIcon}
          plan={plan}
          onClick={() => {
            setError({ ...error, state: false });
            selectSub("Arcade");
          }}
          style={plan.sub === "Arcade" ? style : error.state ? error.style : {}}
        />
        <Step2Selector
          title="Advanced"
          charge={yearly ? "$120/yr" : "$12/mo"}
          icon={advancedIcon}
          plan={plan}
          onClick={() => {
            setError({ ...error, state: false });
            selectSub("Advanced");
          }}
          style={
            plan.sub === "Advanced" ? style : error.state ? error.style : {}
          }
        />
        <Step2Selector
          title="Pro"
          charge={yearly ? "$150/yr" : "$15/mo"}
          icon={proIcon}
          plan={plan}
          onClick={() => {
            setError({ ...error, state: false });
            selectSub("Pro");
          }}
          style={plan.sub === "Pro" ? style : error.state ? error.style : {}}
        />
      </div>
      {error.state && <p className="error-message">Please select a plan</p>}
      <div
        className="checkmark-container"
        style={yearly ? { marginBottom: "5rem" } : {}}
      >
        <p style={yearly ? { color: "hsl(231, 11%, 63%)" } : {}}>Monthly</p>
        {yearly ? (
          <MdToggleOn
            size={40}
            style={{ marginInline: 15 }}
            onClick={() => selectDuration("Monthly")}
          />
        ) : (
          <MdToggleOff
            size={40}
            style={{ marginInline: 15 }}
            onClick={() => selectDuration("Yearly")}
          />
        )}
        <p style={!yearly ? { color: "hsl(231, 11%, 63%)" } : {}}>Yearly</p>
      </div>
      <Footer
        text="Next Step"
        switchStepHandler={switchStepHandler}
        step="step 1"
        onClick={savePlanHandler}
      />
    </div>
  );
};

export default FormStep2;
