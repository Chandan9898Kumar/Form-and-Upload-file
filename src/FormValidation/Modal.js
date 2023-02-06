import React from "react";
import { Image, Modal } from "semantic-ui-react";

function ModalExampleContentImage(props) {
  const [open, setOpen] = React.useState(true);
  if(!open){
    setTimeout(()=>{
        setOpen(true)
    },20000)
  }
  return (
    <Modal
      open={open}
    >
      <Modal.Header style={{marginLeft:'320px'}}>Created Account  successfully</Modal.Header>
      <Modal.Content image>
        <Image
        style={{marginLeft:'50px'}}
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
        />
        <Modal.Description>
          <p style={{marginLeft:'200px'}}>Thanks For Creating An Account</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default ModalExampleContentImage;
