import React, { Fragment } from "react";
import { Button } from './Components';
import { NameApp } from './Components';
import { FlipCard } from "./Components";
// import { EditTextBox } from './Components'
import { Popup } from './Components';



import './App.css';


export default function App() {

  function handleClick() {
      console.log("Click ME")
  }



  return (
  <Fragment>
    <div className="App">
      <div className="header">
        <NameApp label="NameApp!"/>
        <Popup label="Setting"/>
        <Button label="Button2" onClick={handleClick}/>
      </div>

      <div className="body">
        <FlipCard frontLabel ="TempFront1" backLabel = "TempBack1"/>
        <FlipCard frontLabel ="TempFront2" backLabel = "TempBack2"/>
        <FlipCard frontLabel ="TempFront3" backLabel = "TempBack3"/>
        <FlipCard frontLabel ="TempFront4" backLabel = "TempBack4"/>
      </div>
    </div>
  </Fragment>      
  );
}
