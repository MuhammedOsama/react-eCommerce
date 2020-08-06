import React from 'react';
import MainNavbar from './Layout/components/Navbar';
import MainCarousel from './Layout/components/MainCarousel';
import Categories from './Layout/components/Categories';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <MainCarousel />
      <Categories />
    </div>
  );
}

export default App;