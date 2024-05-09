import React from 'react';
import Preview from './Preview/Preview';
import AboutUs from './AboutUs/AboutUs';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';


export default function Main () {

  return (
    <main className="main">
      <Preview />
      <AboutUs />
      <Portfolio />
      <Contacts />
    </main>
  )
}