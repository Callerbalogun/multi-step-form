import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Step3Selector from "./Step3Selector";

const FormStep3 = ({ summary, switchStepHandler, saveAddOn }) => {
  const [addon, setAddOn] = useState([]);
  const [checked, setChecked] = useState({
    os: false,
    ls: false,
    cp: false,
  });
  const [error, setError] = useState({
    state: false,
    message: "Please select a plan",
    style: {
      borderColor: "hsl(354, 84%, 57%)",
    },
  });

  const toggleAddOn = (name, amount) => {
    let selected = addon.findIndex((item) => item.name === name);

    if (selected === -1) {
      setAddOn((prevAddOn) => [
        ...prevAddOn,
        {
          name: name,
          amount: amount,
        },
      ]);
    } else {
      setAddOn(addon.filter((item) => item.name !== name));
    }
  };
  const saveAddOnHandler = () => {
    if (checked.os || checked.ls || checked.cp) {
      saveAddOn(addon);
      switchStepHandler("step 4");
    } else {
      setError({ ...error, state: true });
    }
  };

  let monthly = summary.duration === "Monthly";
  let style = {
    border: "1px solid hsl(243, 100%, 62%)",
    backgroundColor: "hsl(206, 94%, 87%)",
  };

  return (
    <div>
      <Header
        header="Pick add-ons"
        text="Add-ons help enhance your gaming experience."
      />
      <div className="step-3-selector-container">
        <Step3Selector
          headerTxt="Online service"
          description="Acccess to multiplayer games"
          charge={monthly ? "+$1/mo" : "+$10/yr"}
          onClick={() => {
            toggleAddOn("Online service", monthly ? 1 : 10);
            setChecked({ ...checked, os: !checked.os });
            setError({ ...error, state: false });
          }}
          style={checked.os ? style : error.state ? error.style : {}}
          checked={checked.os}
        />
        <Step3Selector
          headerTxt="Larger storage"
          description="Extra 1TB of cloud save"
          charge={monthly ? "+$2/mo" : "+$20/yr"}
          onClick={() => {
            toggleAddOn("Larger storage", monthly ? 2 : 20);
            setChecked({ ...checked, ls: !checked.ls });
            setError({ ...error, state: false });
          }}
          style={checked.ls ? style : error.state ? error.style : {}}
          checked={checked.ls}
        />
        <Step3Selector
          headerTxt="Customizable profile"
          description="Custom theme on your profile"
          charge={monthly ? "+$2/mo" : "+$20/yr"}
          onClick={() => {
            toggleAddOn("Customizable profile", monthly ? 2 : 20);
            setChecked({ ...checked, cp: !checked.cp });
            setError({ ...error, state: false });
          }}
          style={checked.cp ? style : error.state ? error.style : {}}
          checked={checked.cp}
        />
        {error.state && (
          <p className="error-message">Please select at least one add-on</p>
        )}
      </div>
      <Footer
        text="Next Step"
        switchStepHandler={switchStepHandler}
        step="step 2"
        onClick={saveAddOnHandler}
      />
    </div>
  );
};

export default FormStep3;
