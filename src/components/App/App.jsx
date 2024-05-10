import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';

export default function App() {
  // const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  // const [currentSection, setCurrentSection] = useState('');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (prevScrollPos > currentScrollPos) {
  //       document.getElementById("header").style.top = "0";
  //     } else {
  //       document.getElementById("header").style.top = "-70px";
  //     }
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener('scroll', handleScroll);
    
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [prevScrollPos]);

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path="/main" element={
            <>
              <Header />
              <Main />
            </>}>
          </Route>
          <Route path="*" element={<Navigate to="/main" replace />} />
        </Routes>
      </div>
    </>
  )
}