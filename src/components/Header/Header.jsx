import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../images/logo_1.png';
import NavTab from '../NavTab/NavTab';

export default function Header () {

  return (
    <header className="header">
      <div className='header__container'>
        <img src={logo} alt="" className='header__logo' />
        <NavTab />
        {/* <a className='header__link link' href="#about-us">О нас</a>
        <a className='header__link link' href="#portfolio">Портфолио</a>
        <a className='header__link link' href="#contacts">Контакты</a> */}
      </div>
    </header>
  )
}