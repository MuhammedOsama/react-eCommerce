import React from 'react';
import MainNavbar from './Layout/components/Navbar';
import MainCarousel from './Layout/components/MainCarousel';
import Categories from './Layout/components/Categories';
import Products from './Layout/components/Products';
import CountDown from './Layout/components/CountDown';
import Features from './Layout/components/Features';
import Footer from './Layout/components/Footer';

const App = () => {
  return (
    <div className="App">
      <MainNavbar />
      <MainCarousel />
      <Categories />
      <Products />
      <CountDown />
      <Features />
      <Footer />
    </div>
  );
}

export default App;