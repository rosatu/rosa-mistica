import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component{
  render(){
    return(
      <React.Fragment>
        <ul className="nav-wrap">
          <h1>La Rosa Mistica</h1>
          <Link to="/" className="nav-link"><li className="nav-item">Home</li></Link>
          <Link to="/about" className="nav-link"><li className="nav-item">About</li></Link>
          <Link to="/gallery" className="nav-link"><li className="nav-item">Gallery</li></Link>
          <Link to="/accomodations" className="nav-link"><li className="nav-item">Accomodations</li></Link>
        </ul>
      </React.Fragment>
    )
  }

}
