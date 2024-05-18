import React from 'react';
import time_img from '../../../images/img_time.png';
import money_img from '../../../images/img_money.png';
import gear_img from '../../../images/img_gear.png';
import machine_img from '../../../images/img_machine.png';

export default function Benefit() {

  return (
    <section className='benefit' id='benefit'>
      <div className='benefit__container'>
        <h3  className='benefit__title'>Преимущества 3D прототипирования</h3>
        <div className='benefit__item'>
          <img className='benefit__img' src={time_img} alt="" />
          <div className='benefit__text'>
            <p className='benefit__subtitle'>Производство быстрее и дешевле</p>
            <p className='benefit__description'>
              3D прототипирование позволяет в срок от 1 дня изготовить
              опытные образцы для проверки функциональности и дизайна изделий без лишних затрат.
            </p>
          </div>
        </div>
        <div className='benefit__item'>
          <img className='benefit__img' src={gear_img} alt="" />
          <div className='benefit__text'>
            <p className='benefit__subtitle'>Высокая детализация и точность</p>
            <p className='benefit__description'>
              Напечатаем наглядные образцы ваших изделий на бытовых или 
              промышленных 3D-принтерах с точностью до 16 микрон.
            </p>
          </div>
        </div>
        <div className='benefit__item'>
          <img className='benefit__img' src={money_img} alt="" />
          <div className='benefit__text'>
            <p className='benefit__subtitle'>Прототипы любой сложности по выгодным ценам</p>
            <p className='benefit__description'>
              У нас 5+ технологий 3D прототипированияи и собственное оборудование.
              Опытные специалисты подберут оптимальное производство для вашего прототипа.
            </p>
          </div>
        </div>
        <div className='benefit__item'>
          <img className='benefit__img' src={machine_img} alt="" />
          <div className='benefit__text'>
            <p className='benefit__subtitle'>Удобное современное производство</p>
            <p className='benefit__description'>
              Производство опытных образцов осуществляются по цифровым 3D-моделям,
              которые легко исправить, если обнаружились конструторские ошибки.
              Быстрое прототипирование с помощью 3D печати - идеально для быстрого и экономичного
              изготовления прототипов корпусов, опытных образцов деталей и отладки
              новых устройств перед серийным выпуском. У нас можно заказать 3D прототипирование
              по лучшим технологиям и выгодным ценам.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}