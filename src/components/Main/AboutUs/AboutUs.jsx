import React, { useState, useEffect } from 'react';

export default function AboutUs() {
  return (
    <section className='about-us' id='about-us'>
      <div className='about-us__container'>
        <div className='about-us__main'>
          <div className='about-us__major'>
            <svg className='about-us__svg' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_234_854)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M44 0H0V150C0 177.614 22.3858 200 50 200H94V50C94 22.3858 71.6142 0 44 0ZM156 0C128.386 0 106 22.3858 106 50V200H150C177.614 200 200 177.614 200 150V0H156Z" fill="url(#paint0_linear_234_854)"/> </g> <defs> <linearGradient id="paint0_linear_234_854" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7"/> <stop offset="1" stop-color="#FFDBB0"/> </linearGradient> <clipPath id="clip0_234_854"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
            <div className='about-us__img'></div>
            <h3 className='about-us__name'>BAMBL</h3>
          </div>
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
      </div>
    </section>
  );
}
