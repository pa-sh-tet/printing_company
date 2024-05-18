import React, { useState, useEffect } from 'react';
import foto1 from '../../../images/photo_1.jpg';
import foto2 from '../../../images/photo_2.jpg';
import foto3 from '../../../images/photo_3.jpg';
import foto4 from '../../../images/photo_4.jpg';
import foto5 from '../../../images/photo_5.jpg';

// function imgStyle (imgUrl) {
//   backgroundImage: 'url(' + imgUrl + ')',
// };

export default function AboutUs() {
  return (
    <section className='about-us' id='about-us'>
      <div className='about-us__container'>
        <div className='about-us__main'>
          <div className='about-us__major'>
            <div className='about-us__img'></div>
            <h3 className='about-us__name'>BAMBL</h3>
          </div>
          {/* <div className='about-us__img'>
            <img src={logo} alt=""className='about-us__logo' />
          </div> */}
          <div className="about-us__text">
            <h3 className='about-us__title'>О компании</h3>
            <p className='about-us__description'>
              Мы - молодая, амбициозная компания, основанная в 2020 году. Наша цель - производить
              высококачественные и долговечные изделия из экологически чистых материалов нового поколения. 
              Начав с малого стартапа, мы быстро развивались и расширяли производство, внедряя передовые технологии и 
              методы работы. Сегодня мы гордимся своей высокотехнологичной производственной базой
                и сплоченной командой профессионалов.
            </p>
          </div>
        </div>
        <div className='about-us__cards'>
          <div className='about-us__card'>
            <h4 className='about-us__card-title'>Производственный процесс</h4>
            <p className='about-us__card-description'>
              Для изготовления нашей продукции мы используем современные 
              композитные материалы, натуральных минеральных наполнителей. Это позволяет создавать очень прочные, 
              но при этом легкие и экологичные изделия.
              Полный производственный цикл от подготовки сырья до выпуска готового изделия занимает 
              от 3 до 14 дней в зависимости от сложности заказа.
            </p>
          </div>
          <div className='about-us__card'>
            <h4 className='about-us__card-title'>Развитие и стремления</h4>
            <p className='about-us__card-description'>
              Мы постоянно работаем над улучшением свойств нашей продукции, 
              разрабатывая новые составы композитов. Большое внимание уделяется 
              экологичности, ремонтопригодности и возможности вторичной переработки 
              изделий после истечения срока службы.<br></br>
              Наша компания стремится сделать жизнь людей более 
              комфортной и экологичной за счет применения современных 
              материалов. Мы создаем изделия, которые прослужат долгие годы и не 
              навредят природе после утилизации. Развивая наше производство, мы также создаем 
              новые рабочие места и способствуем процветанию региона.
            </p>
          </div>
        </div>
        <div className='about-us__fila'>
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
