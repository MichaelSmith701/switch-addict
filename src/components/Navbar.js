import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
      <header className="nav">
        <h2><Link to="/">SWITCH ADDICT</Link></h2>
        <nav>
          <li><a>News</a></li>
          <li><a>Reviews</a></li>
          <li><a>Discussion</a></li>
        </nav>
      </header>
      );
  }
}

export default Navbar;