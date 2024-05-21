import React from 'react';
import Preview from './Preview/Preview';
import AboutUs from './AboutUs/AboutUs';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import Benefit from './Benefit/Benefit';
import Materials from './Materials/Materials';

export default function Main () {

  return (
    <main className="main">
      {/* <Preview /> */}
      <AboutUs />
      <Materials />
      <Benefit />
      <Portfolio />
      <Contacts />
      <Footer />
    </main>
  )
}