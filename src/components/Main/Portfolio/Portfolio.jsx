import { Link } from 'react-router-dom';
import React from 'react';
import Card from './Card/Card';
import photo1 from '../../../images/grid1.jpg';
import photo2 from '../../../images/grid2.jpg';
import photo3 from '../../../images/grid3.jpg';
import photo4 from '../../../images/grid4.jpg';
import photo5 from '../../../images/grid5.jpg';
import photo6 from '../../../images/grid6.jpg';

const workCards = [
  {
    name: 'Название',
    image: photo1,
    text: 'какое то описание изделия',
  },
  {
    name: 'Название',
    image: photo2,
    text: 'какое то длинооооооооооооооооооооооое описание изделия',
  },
  {
    name: 'Название',
    image: photo3,
    text: 'какое то описание изделия',
  },
  {
    name: 'Название',
    image: photo4,
    text: 'какое то описание изделия',
  },
  {
    name: 'Название',
    image: photo5,
    text: 'какое то описание изделия',
  },
  {
    name: 'Название',
    image: photo6,
    text: 'какое то описание изделия',
  },
];

export default function Portfolio () {
  return (
    <section className="portfolio" id='portfolio'>
      <div className='portfolio__container'>
        <h3 className='portfolio__title'>Наши работы</h3>
        <div className='portfolio__grid'>
          {workCards.map((work, index) => (
            <Card key={index} image={work.image} name={work.name} text={work.text} />
          ))}
        </div>
      </div>
    </section>
  )
}