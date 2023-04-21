import React from 'react';
import './App.css';

const handleClick1 = () => {
  console.log('me click1');
};

const handleClick2 = () => {
  console.log('me click2');
};

const handleClick3 = () => {
  console.log('me click3');
};
function App() {
  return (

    <div className="App">
      <div className="header">

        <div className="modal">
          <h2>Chrats</h2>
        </div>
        <button className="button" onClick={handleClick1}><h3>Buttom 1111111111111111111111111111111</h3></button>
        <button className="button" onClick={handleClick2}><h3>Buttom 2</h3></button>
        <button className="button" onClick={handleClick3}><h3>Buttom 3</h3></button>
      </div>

      <div className="body">
      <label>
        <div class="flip-card">
        <input type="checkbox"  />
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div className="one">
                <i className="gg-thermometer"></i>
                <h1>H1</h1>
                <div className="pie animate"> 100%</div>
              </div>
              <div className="two">
                <i className="gg-thermometer"></i>
                <h1>H2</h1>
                <div className="pie animate"> 100%</div>
              </div>
              <div className="three">
                <i className="gg-thermometer"></i>
                <h1>H3</h1>
                <div className="pie animate"> 100%</div>
              </div>
            </div>
            <div class="flip-card-back">
            <div className="one">
                <i className="gg-thermometer"></i>
                <h1>H4</h1>
                <div className="pie animate"> 100%</div>
              </div>
              <div className="two">
                <i className="gg-thermometer"></i>
                <h1>H5</h1>
                <div className="pie animate"> 100%</div>
              </div>
              <div className="three">
                <i className="gg-thermometer"></i>
                <h1>H6</h1>
                <div className="pie animate"> 100%</div>
              </div>
            
            </div>
          </div>
        </div>
      </label>
      </div>
    </div>

  );
}

export default App;