import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './page/About';
import Collections from './page/Collections';
import Women from './page/Women';
import Men from './page/Men';
import Home from './page/Home';
import Layout from './Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="contact" element={<Collections />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
