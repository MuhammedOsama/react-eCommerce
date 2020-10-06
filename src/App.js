import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import MainNavbar from './Layout/components/MainNavbar';
import SalesPage from './Layout/components/Blocks/SalesPage'
import FeaturesPage from './Layout/components/Blocks/FeaturesPage'
import BlogPage from './Layout/components/Blocks/BlogPage'
import AboutPage from './Layout/components/Blocks/AboutPage'
import ContactPage from './Layout/components/Blocks/ContactPage'
import Footer from './Layout/components/Footer';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/salesPage" exact component={SalesPage} />
        <Route path="/featuresPage" exact component={FeaturesPage} />
        <Route path="/blogPage" exact component={BlogPage} />
        <Route path="/aboutPage" exact component={AboutPage} />
        <Route path="/contactPage" exact component={ContactPage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;