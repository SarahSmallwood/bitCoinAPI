import React from 'react';
import Currencies from '..pages/Currencies';
import Price from './pages/Price';
import Main from './pages/Main';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element={<Price/>} />
    </Routes>
    </div>
  )
}

export default App