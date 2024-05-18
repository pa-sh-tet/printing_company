import React from 'react';

export default function Contacts () {

  return (
    <section className='contacts' id='contacts'>
      <div className='contacts__container'>
        <h3 className='contacts__title'>Свяжитесь с нами</h3>
        <p className='contacts__description'>Для дальнейшего сотрудничества свяжитесь с нами по номеру телефона:</p>
        <p className='contacts__item'>+7 (996) 721 5051</p>
        <p className='contacts__description'>Или почте:</p>
        <p className='contacts__item'>3d.bambl@mail.ru</p>
      </div>
    </section>
  )
}