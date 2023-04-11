import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="modal">
          Menu
          </h1>
      </header>
      <div className="body">
        {/* <h1>Body</h1> */}
        <div class="row">
          <div class="chart__container">
            <canvas id="chart" width="600" height="300"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;
