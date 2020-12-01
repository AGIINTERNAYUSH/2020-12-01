import './App.css';
import React from 'react';
import Nav from './nav.js';
import Price from './Price';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import P001 from './P001';
import P002 from './P002';
import P003 from './P003';
import P004 from './P004';
import P005 from './P005';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path = "/" exact component={Home}/>
          <Route path = "/contact" component={Contact}/>
          <Route path="/about" component={About} />
          <Route path="/price" component={Price} />
          <Route path="/P001" component={P001} />
          <Route path="/P002" component={P002} />
          <Route path="/P003" component={P003} />
          <Route path="/P004" component={P004} />
          <Route path="/P005" component={P005} />
        </Switch>
      </Router>
    
    </div>
    
  );
}

export default App;
