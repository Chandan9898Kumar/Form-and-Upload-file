import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalBox = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <i>
            In ReactJS whatever we write that looks like HTML is not pure HTML
            actually. All the HTML looking stuff are JSX, Behind the scene, they
            are converted to vanilla JavaScript using babel. These all work in
            this way to make the developer’s life easier. Since JSX are not HTML
            that’s why we do have any direct reference to the HTML elements and
            that’s why we can’t direct fetch properties of any HTML element. To
            fetch the elements’ property, React gives something called as ‘ref’.
            Using ref we can create a direct reference to any HTML elements and
            get controlled over HTML elements properties. Here we use the ‘ref’
            system to fetch image height and width. After getting image height
            and width we set a click handler and increase the dimension of the
            image which gets faded into the DOM property.
          </i>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalBox;
