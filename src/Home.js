import React from 'react';
import MainCarousel from './Layout/components/MainCarousel';
import Categories from './Layout/components/Categories';
import Products from './Layout/components/Products';
import CountDown from './Layout/components/CountDown';
import Features from './Layout/components/Features';

const Home = () => {
  return (
    <div className="App">
      <MainCarousel />
      <Categories />
      <Products />
      <CountDown />
      <Features />
    </div>
  );
}

export default Home;