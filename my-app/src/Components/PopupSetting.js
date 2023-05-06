import React, { useState } from 'react';
import Modal from "react-modal";
import { Button } from '.';



export default function PopupBox(props){
    const {label} = props;

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      width: "50%",
      height: "50%",
      margin: "auto",
      marginTop: "100px",
      border: "2px solid black",
      borderRadius: "20px",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
    },
  };

  return (
    
    <div>
      <Button label={label} onClick={openPopup}>Open Popup</Button>
      <Modal isOpen={isOpen} onRequestClose={closePopup} style={customStyles}>
      <button className="close-btn" onClick={closePopup}/>
        <h2>Popup Title</h2>
        <p>Popup content goes here.</p>
      </Modal>
    </div>
  );
};