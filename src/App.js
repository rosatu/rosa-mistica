import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import GridImg from './components/Grid'
import Home from './components/Home'
import Accomodations from './components/Accomodations'
import {Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="component-wrap">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/gallery" component={GridImg} />
            <Route exact path="/" component={Home} />
            <Route exact path="/accomodations" component={Accomodations} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
