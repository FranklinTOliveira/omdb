import * as omdb from './utils.js'
import logo from './logo.svg';
import './App.css';
import './moviecard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const movies = omdb.getMoviesBySearchTerm("star")
.then(result => result.json())
.then(data => console.log(data));
console.log(movies);

omdb.getMovieDetailsById("tt0076759")
.then(result => result.json())
.then(data => console.log(data));

export default App;
