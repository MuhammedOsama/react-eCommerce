import React from 'react';
import MainCarousel from './Layout/components/MainCarousel';
import Categories from './Layout/components/Categories';
import Products from './Layout/components/Products';
import CountDown from './Layout/components/CountDown';
import Blog from './Layout/components/Blog';
import Features from './Layout/components/Features';

export default () => {
      return (
            <div className="App">
                  <MainCarousel />
                  <Categories />
                  <Products />
                  <CountDown />
                  <Blog />
                  <Features />
            </div>
      );
}