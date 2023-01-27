import Card from "react-bootstrap/Card";
import React from "react";
function ImgOverlayExample({ FirstName, LastName, countryName, textMessage }) {
  return (
    <Card style={{ width: "18rem", marginLeft: "450px" }}>
      <Card.Title>Your details</Card.Title>
      <Card.Text>
        First Name {"  "} {FirstName}
        <br />
        Last Name {"  "} {LastName}
        <br />
        Text Message {"  "} {textMessage}
        <br />
        country Name {"  "} {countryName}
        <br />
      </Card.Text>
      <Card.Text>Last updated {Date.now()}</Card.Text>
    </Card>
  );
}

export default ImgOverlayExample;
