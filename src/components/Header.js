import React from 'react';
import logo from '../images/logo.svg';

const Header = React.memo(() => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
    </header>
  );
});

export default Header;
