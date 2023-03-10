import React from "react";
import "./form.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "semantic-ui-react";
import { countryOptions } from "./SelectedData";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import ImgOverlayExample from "./Card";

const countryList = ["USA", "INDIA", "UK", "Russia"];

const NormalForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textarea, setTextArea] = useState("");
  const [country, setCountry] = useState("");
  const [load, setLoad] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      textarea === "" ||
      country === ""
    ) {
      return (
        toast.info("Please Fill EveryThing...", { autoClose: 1500 })
      );
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    setLoad(true);
    toast.success("Success...", { autoClose: 1500 });
  };

  return (
    <>
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col-25">
              <label>First Name</label>
            </div>
            <div className="col-75">
              <input
                required={true}
                maxLength={15}
                type="text"
                value={firstName}
                name="firstName"
                placeholder="Your name.."
                onCopy={(e) => {
                  toast.info(e.target.value, "Copied");
                }}
                onPaste={() => {
                  toast.info("Pasted");
                }}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <progress value={firstName.length} max={15} />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Last Name</label>
            </div>
            <div className="col-75">
              <input
                maxLength={15}
                required={true}
                type="text"
                value={lastName}
                name="lastName"
                placeholder="Your last name.."
                onCopy={(e) => {
                  toast.info(e.target.value, "Copied");
                }}
                onPaste={() => {
                  toast.info("Pasted");
                }}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <progress value={lastName.length} max={15} />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Country</label>
            </div>
            <div className="col-75">
              {/* <Dropdown
                placeholder="Select Country"
                fluid
                selection
                options={countryOptions}
                onChange={(selected)=> console.log(selected.target,'hg')}
              /> */}
              <form className="k-form k-mb-4">
                <DropDownList
                  data={countryList}
                  onChange={(e) => {
                    setCountry(e.value);
                  }}
                />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Subject</label>
            </div>
            <div className="col-75">
              <textarea
                required={true}
                maxLength={50}
                value={textarea}
                name="textarea"
                placeholder="Write something.."
                onCopy={(e) => {
                  toast.info(e.target.value, "Copied");
                }}
                onPaste={() => {
                  toast.info("Pasted");
                }}
                onChange={(e) => {
                  setTextArea(e.target.value);
                }}
              />
              <progress value={textarea.length} max={50} />
            </div>
          </div>
          <br />
          <div className="row">
            <input type="submit" onClick={(e) => handleSubmit(e)} />
            <ToastContainer />
          </div>
        </form>
      </div>
      {load && (
        <ImgOverlayExample
          FirstName={firstName}
          LastName={lastName}
          countryName={country}
          textMessage={textarea}
        />
      )}
    </>
  );
};
export default NormalForm;
