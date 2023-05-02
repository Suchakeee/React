import React from "react";
import { Button } from './Components';
import { Container } from './Component.styled'
import Charts from './charts';
import './App.css';


export default function App() {

  function handleClick() {
      console.log("Click ME")
  }



  return (

    <div className="App">
      <div className="header">
        <div className="modal">
          <h2>Charts</h2>
        </div>
        <Button label="Hello World!" onClick={handleClick}/>
        <Container>
          ButtonNew
        </Container>
      </div>

      <div className="body">
        <label>
          <div class="flip-card">
            <input type="checkbox" />
            <div class="flip-card-inner">
              <Charts/>
            </div>
          </div>
        </label>
      </div>
    </div>

  );
}
