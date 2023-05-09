import React, { useState, useRef } from 'react';
import Modal from "react-modal";
import { Button } from '.';


export default function PopupBox(props){
    const {label} = props;
    const inputRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const [updated, setUpdated] = useState('');
  
  const updateTitle = () => {
    //is input value
    setUpdated(inputRef.current.value);
  
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
      <Modal isOpen={isOpen} onRequestClose={closePopup} ariaHideApp={false} style={customStyles}>
      <button className="close-btn" onClick={closePopup}/>
        <h2>Popup Title</h2>
        <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />

        <h2>Updated: {updated}</h2>

        <button onClick={updateTitle}>Update</button>
        <p>Popup content goes here.</p>
      </Modal>
    </div>
  );
};
