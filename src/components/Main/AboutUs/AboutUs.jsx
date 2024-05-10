import React, { useState, useEffect } from 'react';
import logo from '../../../images/logo_1.png';

export default function AboutUs() {
  return (
    <section className='about-us' id='about-us'>
      {/* <div className='about-us__gradient'></div> */}
      <div className='about-us__container'>
        <div className='about-us__img'>
          <img src={logo} alt=""className='about-us__logo' />
        </div>
        <div className="about-us__text">
          <h3 className='about-us__title'>BAMBL</h3>
          <p className='about-us__description'>
            Создаём будущее сейчас. Стремимся изменить мир 
            с помощью технологии трехмерной печати.
          </p>
        </div>
      </div>
      {/* <div className='about-us__gradient'></div> */}
    </section>
  );
}
