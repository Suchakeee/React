import React from 'react';
import './App.css';

const handleClick = () => {
  console.log('me click');
};

function App() {
  return (

    <div class="App">
      <div class="header"> 
           <div class="modal">
             <h2>Chrats</h2>
           </div>
             <button class="button" onClick={handleClick}><h3>Buttom 1</h3></button>
             <button class="button"><h3>Buttom 2</h3></button>
             <button class="button"><h3>Buttom 3</h3></button>       
      </div>

      <div class="body"> 
        <div class="one">
          <i class="gg-thermometer"></i>
          <h1>H1</h1>
          <div class="pie animate"> 100%</div>
        </div>
        <div class="two">
          <i class="gg-thermometer"></i>
          <h1>H2</h1>
          <div class="pie animate"> 100%</div>
        </div>
        <div class="three">
          <i class="gg-thermometer"></i>
          <h1>H3</h1>
          <div class="pie animate"> 100%</div>
        </div>
      
      </div>
    </div>

  );
}

export default App;
