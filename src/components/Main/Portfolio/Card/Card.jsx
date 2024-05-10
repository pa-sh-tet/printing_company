import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Card({ image, name, text }) {

  return (
    <div className='card'>
      {/* <div className='card__image-container'> */}
        <img className='card__image' 
        src={image}
        alt='Фото выступления'/>
        <div className='card__info'>
          <p className='card__title'>Название: {name}</p>
          <p className='card__description'>Описание: {text}</p>
        </div>
      {/* </div> */}
      {/* <p className='card__name'>{name}</p> */}
    </div>
  )
}