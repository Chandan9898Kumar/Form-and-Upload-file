import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <ul className="navigation">
        <li>
          <a href>
            {" "}
            <NavLink to="/HTMLForm">HTML Form</NavLink>{" "}
          </a>
        </li>
        <li>
          <a href>
            {" "}
            <NavLink to="/BootstrapForm">Bootstrap Form</NavLink>{" "}
          </a>
        </li>
        <li>
          {" "}
          <a href>
            <NavLink to="/validateForm">Validated Form</NavLink>
          </a>
        </li>
        <li>
          {" "}
          <a href>
            <NavLink to="/UploadFile">Upload File</NavLink>
          </a>
        </li>
        <li>
          {" "}
          <a href>
            <NavLink to="/ZoomInOut">Zoom In Out</NavLink>
          </a>
        </li>
      </ul>
    </>
  );
};
export default NavBar;
