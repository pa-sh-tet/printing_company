import { Link } from 'react-router-dom';
import React from 'react';
import vk from '../../../images/vk_white.png';
import tg from '../../../images/telegram_white.png';

export default function Footer () {

  return (
    <footer className="footer">
      <div className='footer__container'>
      <h2 className="footer__title">©BAMBL, 2024 г.</h2>
        <div className='footer__links'>
          <Link to='/'><img src={vk} alt="vk" className='footer__link link' /></Link>
          <Link to='/'><img src={tg} alt="tg" className='footer__link link' /></Link>
        </div>
      </div>
    </footer>
  )
}