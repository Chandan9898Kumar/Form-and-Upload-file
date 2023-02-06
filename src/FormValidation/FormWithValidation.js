import React, { useState } from "react";
import "./formValidation.css";
import ModalExampleContentImage from './Modal'
const data = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const FormValidation = () => {
// Instead of using useState for all data,we took only one useState,and put object in it.
  const [formDetails, setFormDetails] = useState(data);
  const [result,setResult]=useState(false)

  const handleCHange = (e) => {
    // e.target.style.color='red'
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit=(e)=>{
    e.preventDefault()
    setFormDetails(data)
    setResult(true)
}
if(result){
    setTimeout(()=>{
        setResult(false)
    },1000)
}

  return (
    <div className="parentDiv">
      <form className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>

        <div className="input-container ic1">
          <input
            required={true}
            maxLength={20}
            className="myInput"
            type="text"
            name="firstName"
            value={formDetails.firstName}
            placeholder="First Name"
            onChange={(e) => handleCHange(e)}
          />
          <progress
            style={{ marginLeft: "5px" }}
            value={formDetails.firstName && formDetails.firstName.length}
            max={20}
          />
        </div>

        <div className="input-container ic2">
          <input
            required={true}
            maxLength={20}
            className="myInput"
            type="text"
            name="lastName"
            value={formDetails.lastName}
            placeholder="Last Name"
            onChange={(e) => handleCHange(e)}
          />
          <progress
            style={{ marginLeft: "5px" }}
            value={formDetails.lastName && formDetails.lastName.length}
            max={20}
          />
        </div>

        <div className="input-container ic2">
          <input
            required={true}
            className="myInput"
            type="email"
            name="email"
            value={formDetails.email}
            placeholder="Email"
            onChange={(e) => handleCHange(e)}
          />
          <progress
            style={{ marginLeft: "5px" }}
            value={formDetails.email && formDetails.email.length}
            max={20}
          />
        </div>

        <div className="input-container ic2">
          <input
            required={true}
            className="myInput"
            type="password"
            name="password"
            value={formDetails.password}
            placeholder="Password"
            onChange={(e) => handleCHange(e)}
          />
          <progress
            style={{ marginLeft: "5px" }}
            value={formDetails.password && formDetails.password.length}
            max={20}
          />
        </div>

        <div className="input-container ic2">
          <input
            disabled={false}
            className="myInput"
            type="submit"
            value="Submit"
            onClick={(e) => {
              handleSubmit(e)
            }}
          />
        </div>
      </form>
      {
        result && <ModalExampleContentImage formDetails={formDetails} />
      }
    </div>
  );
};
export default FormValidation;
