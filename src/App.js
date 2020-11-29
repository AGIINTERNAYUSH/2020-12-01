import './App.css';
import React from 'react';
import Nav from './nav.js';
import Price from './Price';
import Home from './Home';
import About from './About';
import P001 from './P001';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path = "/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/price" component={Price} />
          <Route path="/P001" component={P001} />
        </Switch>
      </Router>
    
    </div>
    
  );
}

export default App;
