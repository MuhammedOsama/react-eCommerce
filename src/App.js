import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MainNavbar from './Layout/components/MainNavbar';
import MainCarousel from './Layout/components/MainCarousel';
import Categories from './Layout/components/Categories';
import Products from './Layout/components/Products';
import CountDown from './Layout/components/CountDown';
import Features from './Layout/components/Features';
import Footer from './Layout/components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <MainCarousel />
        <Categories />
        <Products />
        <CountDown />
        <Features />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;