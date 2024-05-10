import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../images/logo_1.png';
import NavTab from './NavTab/NavTab';

export default function Header () {

  return (
    <header className="header" id="header">
      <div className='header__container'>
        <img src={logo} alt="" className='header__logo' />
        <NavTab />
      </div>
    </header>
  )
}