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
import Login from '../src/Layout/components/Blocks/Login';
import Register from '../src/Layout/components/Blocks/Register';
import Reset from '../src/Layout/components/Blocks/Reset';


export default () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/sale-page" exact component={SalesPage} />
        <Route path="/features-page" exact component={FeaturesPage} />
        <Route path="/blog-page" exact component={BlogPage} />
        <Route path="/about-page" exact component={AboutPage} />
        <Route path="/contact-page" exact component={ContactPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/reset" exact component={Reset} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}