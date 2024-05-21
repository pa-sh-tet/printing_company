import React, { useEffect, useState } from 'react';

export default function NavTab() {
  const [currentSection, setCurrentSection] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          setCurrentSection(section.id);
        }
      });

      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-70px"; // Устанавливаем смещение на 70px
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className='nav-tab'>
      <a className={currentSection === 'about-us' ? 'nav-tab__link nav-tab__link_active link' : 'nav-tab__link link'} href="#about-us">О нас</a>
      <a className={currentSection === 'materials' ? 'nav-tab__link nav-tab__link_active link' : 'nav-tab__link link'} href="#materials">Материалы</a>
      <a className={currentSection === 'benefit' ? 'nav-tab__link nav-tab__link_active link' : 'nav-tab__link link'} href="#benefit">Преимущества</a>
      <a className={currentSection === 'portfolio' ? 'nav-tab__link nav-tab__link_active link' : 'nav-tab__link link'} href="#portfolio">Портфолио</a>
      <a className={currentSection === 'contacts' ? 'nav-tab__link nav-tab__link_active link' : 'nav-tab__link link'} href="#contacts">Контакты</a>
    </div>
  );
}
