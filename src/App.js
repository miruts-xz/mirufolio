import mire from './assets/images/mire.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mire} className="App-logo" alt="logo" />
        <p>
          Hello, My name is Miruts Hadush
        </p>
        <a
          className="App-link"
          href="https://github.com/miruts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Software Developer
        </a>
      </header>
    </div>
  );
}

export default App;
