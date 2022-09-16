import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Artworks from './Components/Artworks/Artworks';
import Favourites from './Components/Favourites/Favourites';
import Details from './Components/Details/Details';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Artworks />} />
        <Route path='/' element={<Artworks />} />
        <Route path='artwork' element={<Artworks />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='favourites' element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
