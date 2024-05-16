import './App.css';
import MyRGBPanel from './components/MyRGBPanel';
import MyCalculator from './components/MyCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>4B0G0093 5/16作業</h1>
        <h2>MyRGBPanel</h2>
        <MyRGBPanel />
        <h2>MyCalculator</h2>
        <MyCalculator />
      </header>
    </div>
  );
}

export default App;