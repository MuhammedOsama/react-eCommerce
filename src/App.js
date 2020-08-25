import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import MainNavbar from './Layout/components/MainNavbar';
import Footer from './Layout/components/Footer';
import FeaturesPage from './Layout/components/Blocks/FeaturesPage'
import BlogPage from './Layout/components/Blocks/BlogPage'
import AboutPage from './Layout/components/Blocks/AboutPage'
import ContactPage from './Layout/components/Blocks/ContactPage'


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/featuresPage" exact component={FeaturesPage} />
        <Route path="/blogPage" exact component={BlogPage} />
        <Route path="/aboutPage" exact component={AboutPage} />
        <Route path="/contactPage" exact component={ContactPage} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;