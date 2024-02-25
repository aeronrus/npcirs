import React, { Suspense, useState, useEffect } from 'react';
import './scss/app.scss';
import './index.css';

import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
const Card = React.lazy(() => import('./components/Card/Card'));

function App() {
  return (
    <div className="wrapper">
      {' '}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/card/:id"
          element={
            <Suspense fallback={<div>Загружаем информацию....</div>}>
              <Card />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
