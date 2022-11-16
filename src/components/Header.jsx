import React from 'react';
import './Header.css';

export const Header = () => (
  <header>
    <div className='green-bar'></div>
    <div className='header'>
      <div>
        <h2 className='header__name'>PAULIUS MURAŠOVAS</h2>
      </div>
      <div>
        <h2 className='header__profession'>PROGRAMER</h2>
      </div>
    </div>
  </header>
);

export default Header;
