import React, { useState } from "react";
import "./formValidation.css";
const FormValidation = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="parentDiv">
      <form className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>

        <div className="input-container ic1">
          <input
            className="myInput"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
        </div>

        <div className="input-container ic2">
          <input
            className="myInput"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>

        <div className="input-container ic2">
          <input
            className="myInput"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="input-container ic2">
          <input
            className="myInput"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <div className="input-container ic2">
          <input
            disabled={false}
            className="myInput"
            type="submit"
            value="Submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("clicked");
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default FormValidation;
