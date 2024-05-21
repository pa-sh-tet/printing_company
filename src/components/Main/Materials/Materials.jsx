import React, { useState, useEffect } from 'react';
import foto1 from '../../../images/photo_1.jpg';
import foto5 from '../../../images/photo_2.jpg';
import foto3 from '../../../images/photo_3.jpg';
import foto4 from '../../../images/photo_4.jpg';
import foto2 from '../../../images/photo_5.jpg';


export default function Materials() {
  return (
    <section className='materials' id='materials'>
        <div className='materials__container'>
        <div className='about-us__fila' >
          <h3 className='about-us__fila-title'>Материалы</h3>
          <p className='about-us__fila-description'>
            Наличие собственного производства филамента является 
            большим конкурентным преимуществом нашей компании. Мы 
            можем предложить заказчикам оригинальные высококачественные 
            материалы для 3D-печати с улучшенными физико-механическими 
            свойствами по доступной цене.
          </p>
          <div className='about-us__flex'>
            <div className="about-us__foto" style={{ backgroundImage: `url(${foto1})` }}></div>
            <div className="about-us__foto" style={{ backgroundImage: `url(${foto2})` }}></div>
            <div className="about-us__foto" style={{ backgroundImage: `url(${foto3})` }}></div>
            <div className="about-us__foto" style={{ backgroundImage: `url(${foto4})` }}></div>
            <div className="about-us__foto" style={{ backgroundImage: `url(${foto5})` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
