import React from 'react';
import logo from '../assets/nobel_logo.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ logo } alt="Nobel Logo" />
      </header>
    );
  }
}

export default Header;
