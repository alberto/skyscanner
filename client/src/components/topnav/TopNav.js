import React from 'react';
import BpkMenuIcon from 'bpk-component-icon/lg/menu';

import './TopNav.scss';
import logo from '../../logo-full.svg';

const TopNav = () => (
  <header className='header'>
    <a href="/">
      <span className='logoText'>Skyscanner</span>
      <img className='logo' alt="Skyscanner" src={logo}/>
    </a>
    <a>
      <BpkMenuIcon className="TopNav__menu-icon" />
    </a>
  </header>
);

export default TopNav;
