import React from 'react';
// import Ttt from './ttt'
import Button from './button'
import Charts from './charts';
import './App.css';



function App() {
  

  return (

    <div className="App">
      <div className="header">
        <div className="modal">
          <h2>Chrats</h2>
        </div>
        <Button/>
      </div>

      <div className="body">
      <label>
        <div class="flip-card">
        <input type="checkbox"  />
          <div class="flip-card-inner">
              <Charts/>
          </div>
        </div>
      </label>
      </div>
    </div>

  );
}

export default App;