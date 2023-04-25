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
<<<<<<< HEAD
        <Button/>
=======
        <button className="button" onClick={handleClick1}><h3>Buttom 12321313213131</h3></button>
        <button className="button" onClick={handleClick2}><h3>Buttom 2</h3></button>
        <button className="button" onClick={handleClick3}><h3>Buttom 3</h3></button>
>>>>>>> 10a13fad82baccb62da59aafec30d19d36d6348c
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