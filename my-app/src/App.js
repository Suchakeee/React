import React, { Fragment } from "react";
import { Button } from './Components';
import { NameApp } from './Components';
import { FlipCard } from "./Components";



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
        <Button label="Button1" onClick={handleClick}/>
        <Button label="Button2" onClick={handleClick}/>
      </div>

      <div className="body">
        <FlipCard frontLabel ="TempFront1" backLabel = "TempBack1"/>
        <FlipCard frontLabel ="TempFront2" backLabel = "TempBack2"/>
        <FlipCard frontLabel ="TempFront3" backLabel = "TempBack3"/>
        
        {/* <label>
          <div class="flip-card">
            <input type="checkbox" />
            <div class="flip-card-inner"> */}
              {/* <Charts label="Temp1"/>
              <Charts label="Temp2"/>
              <Charts label="Temp3"/>
              <Charts label="Temp4"/> */}
            {/* </div>
          </div>
        </label> */}
      </div>
    </div>
  </Fragment>      
  );
}
