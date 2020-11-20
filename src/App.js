import './App.css';
import React from 'react';
import Nav from './nav.js';
import Price from './Price';
import About from './About';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/price" component={Price} />
        </Switch>
      </Router>
    
    </div>
    
  );
}

export default App;
