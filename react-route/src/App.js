import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/about/" exact component={About} />
      </div>
    </Router>
  );
}

export default App;
