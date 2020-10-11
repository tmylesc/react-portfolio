import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/nav';
import About from './pages/About';
import Footer from './components/footer/index';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
