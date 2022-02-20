import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { Application } from '../../assets/constants';
import './Header.css';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="Header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{Application.APPLICATION_NAME}</p>
      </header>
    );
  }
}

export default Header;
