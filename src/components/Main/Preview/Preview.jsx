import React, { useState, useEffect } from 'react';
import logo from '../../../images/logo_2.png';

export default function Preview() {
  return (
    <section className='preview'>
      <div className="preview__container">
        <svg className='preview__svg' width="500" height="500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_234_854)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M44 0H0V150C0 177.614 22.3858 200 50 200H94V50C94 22.3858 71.6142 0 44 0ZM156 0C128.386 0 106 22.3858 106 50V200H150C177.614 200 200 177.614 200 150V0H156Z" fill="url(#paint0_linear_234_854)"/> </g> <defs> <linearGradient id="paint0_linear_234_854" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7"/> <stop offset="1" stop-color="#FFDBB0"/> </linearGradient> <clipPath id="clip0_234_854"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
          <img src={logo} className="preview__image" />
        <h2 className="preview__title">BAMBL</h2>
      </div>
    </section>
  );
}
