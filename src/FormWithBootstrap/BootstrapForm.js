import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormBootstrapExample = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [username, setUserName] = useState("");
  const [openmodal, setOpenModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (fname.length === 0 || lname.length === 0 || username.length === 0) {
      toast.warning("Please type valid input...", { autoClose: 1500 });
    } else {
      toast.success("Success...", { autoClose: 1500 });
      setOpenModal(true);
    }
    setValidated()
   setTimeout(() => {
    window.location.reload()
   }, 1000);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-6" style={{ marginTop: "100px" }}>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              value={fname}
              placeholder="First name"
              defaultValue="Mark"
              onChange={(e) => {
                setFName(e.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              value={lname}
              placeholder="Last name"
              defaultValue="Otto"
              onChange={(e) => {
                setLName(e.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
        <ToastContainer />
      </Form>
      {fname.length > 0 &&
        lname.length > 0 &&
        username.length > 0 &&
        openmodal && (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Your Details</Card.Title>
              <Card.Text>your First Name - {fname}</Card.Text>
              <Card.Text>your Last Name - {lname}</Card.Text>
              <Card.Text>your User Name - {username}</Card.Text>
            </Card.Body>
          </Card>
        )}
    </>
  );
};

export default FormBootstrapExample;
