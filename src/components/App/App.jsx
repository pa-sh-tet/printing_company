import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';

export default function App() {

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