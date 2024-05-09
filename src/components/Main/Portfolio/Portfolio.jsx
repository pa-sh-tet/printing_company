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
    // name: 'Сахар звезд',
    image: photo1,
  },
  {
    // name: '«Счастье - это путь»',
    image: photo2,
  },
  {
    // name: 'Сабантуй',
    image: photo3,
  },
  {
    // name: 'Digital',
    image: photo4,
  },
  {
    // name: 'Татарский танец',
    image: photo5,
  },
  {
    // name: 'Светодиоды',
    image: photo6,
  },
];

export default function Portfolio () {
  return (
    <section className="portfolio" id='portfolio'>
      <div className='portfolio__container'>
        <h3 className='portfolio__title'>Наши работы</h3>
        <div className='portfolio__grid'>
          {workCards.map((work, index) => (
            <Card key={index} image={work.image} />
          ))}
        </div>
      </div>
    </section>
  )
}