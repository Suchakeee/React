import React from "react";
import { Button } from './Components';
import { Charts } from './Components';
import { NameApp } from './Components';


import './App.css';


export default function App() {

  function handleClick() {
      console.log("Click ME")
  }



  return (

    <div className="App">
      <div className="header">
        {/* <div className="modal">
          <h2>NameApp!</h2>
        </div> */}
        <NameApp label="NameApp!"/>
        <Button label="Button1" onClick={handleClick}/>
        <Button label="Button2" onClick={handleClick}/>
      </div>

      <div className="body">
        {/* <label>
          <div class="flip-card">
            <input type="checkbox" />
            <div class="flip-card-inner"> */}
              <Charts label="Temp1"/>
              <Charts label="Temp2"/>
              <Charts label="Temp3"/>
              <Charts label="Temp4"/>
            {/* </div>
          </div>
        </label> */}
      </div>
    </div>

  );
}
