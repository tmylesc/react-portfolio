import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './components/footer/index';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Switch>
          <Route path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
