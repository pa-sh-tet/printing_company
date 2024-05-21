import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Card({ image, name, text }) {

  return (
    <div className='card'>
      <img className='card__image'
      src={image}
      alt='Фото выступления'/>
      <div className='card__info'>
        <p className='card__title'>{name}</p>
        <p className='card__description'>{text}</p>
      </div>
    </div>
  )
}