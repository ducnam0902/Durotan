import About from '@durotan/pages/About';
import Blog from '@durotan/pages/Blog';
import Contact from '@durotan/pages/Contact';
import HomePage from '@durotan/pages/HomePage';
import PageNotFound from '@durotan/pages/PageNotFound';
import Shop from '@durotan/pages/Shop';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
