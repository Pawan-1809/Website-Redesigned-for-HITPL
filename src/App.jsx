import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroll from './SmoothScroll';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Gallery from './pages/Gallery';
import Products from './pages/Products';
import Branches from './pages/Branches';

function App() {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="branches" element={<Branches />} />
            <Route path="clients" element={<Clients />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="products" element={<Products />} />
            <Route path="*" element={<div className="h-[70vh] flex items-center justify-center"><h1 className="text-4xl text-primary font-bold">Page Not Found</h1></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SmoothScroll>
  );
}

export default App;
