import React, { Component } from 'react';
// import './App.css';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
        <nav className="Navigation">
            <h2 className="logo"> Codrey's 1st React Project </h2>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Serices</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>

        

    );
  }
}

export default Navigation;