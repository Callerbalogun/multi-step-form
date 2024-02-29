import { useState } from "react";
import CustomButton from "./CustomButton";
import Header from "./Header";

const FormStep1 = ({ switchStepHandler, saveUserDetails }) => {
  const [userDetails, setUserDetaills] = useState({
    name: "",
    email: "",
    Phone: "",
  });
  const [error, setError] = useState({
    label: "",
    text: "",
    style: {
      border: "1px solid hsl(354, 84%, 57%)",
    },
  });

  const saveUserDetailsHandler = () => {
    let nameIsValid = userDetails.name.length > 1 ? true : false;
    let mailIsValid =
      userDetails.email.includes(".com") &&
      userDetails.email.includes("@") &&
      userDetails.email.length > 6 &&
      true;
    let phoneIsValid =
      userDetails.Phone.toString().length > 9 &&
      !isNaN(userDetails.Phone) &&
      true;

    if (nameIsValid && mailIsValid && phoneIsValid) {
      saveUserDetails(userDetails);
      switchStepHandler("step 2");
    } else if (!nameIsValid) {
      setError({ ...error, label: "name", text: "This field is required" });
    } else if (!mailIsValid) {
      setError({ ...error, label: "email", text: "Invalid email address" });
    } else if (!phoneIsValid) {
      setError({ ...error, label: "phone", text: "Invalid Phone number" });
    }
  };

  return (
    <div>
      <Header
        header="Personal info"
        text="Please provide your name, email address and phone number."
      />
      <form>
        <div className="label-container">
          <p className="label">Name</p>
          {error.label === "name" && (
            <p className="step-1-input-error-text">{error.text}</p>
          )}
        </div>
        <input
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
          onChange={(e) => {
            setError({ ...error, label: "" });
            setUserDetaills({ ...userDetails, name: e.target.value });
          }}
          style={error.label === "name" ? error.style : {}}
        />
        <div className="label-container">
          <p className="label">Email Address</p>
          {error.label === "email" && (
            <p className="step-1-input-error-text">{error.text}</p>
          )}
        </div>
        <input
          type="text"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => {
            setError({ ...error, label: "" });
            setUserDetaills({ ...userDetails, email: e.target.value });
          }}
          style={error.label === "email" ? error.style : {}}
        />
        <div className="label-container">
          <p className="label">Phone</p>
          {error.label === "phone" && (
            <p className="step-1-input-error-text">{error.text}</p>
          )}
        </div>
        <input
          type="text"
          name="phone"
          placeholder="e.g. 0800 000 0000"
          onChange={(e) => {
            setError({ ...error, label: "" });
            setUserDetaills({ ...userDetails, Phone: +e.target.value });
          }}
          style={error.label === "phone" ? error.style : {}}
        />
      </form>
      <div className="footer">
        <CustomButton text={"Next Step"} onClick={saveUserDetailsHandler} />
      </div>
    </div>
  );
};

export default FormStep1;
