import React from 'react';
import MainNavbar from './Layout/components/Navbar';
import MainCarousel from './Layout/components/MainCarousel';
import Categories from './Layout/components/Categories';
import Products from './Layout/components/Products';
import CountDown from './Layout/components/CountDown';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <MainCarousel />
      <Categories />
      <Products />
      <CountDown />
    </div>
  );
}

export default App;