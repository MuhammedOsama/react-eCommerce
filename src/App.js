import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

    const [userPages, setUserPages] = useState(true);

    function handleUserFunction (status) {
        setUserPages(status);
    }

    return (
        <div className="App">
              <BrowserRouter>
                    {userPages ? <MainNavbar /> : null}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/sale-page" component={SalesPage} />
                        <Route path="/features-page" component={FeaturesPage} />
                        <Route path="/blog-page" component={BlogPage} />
                        <Route path="/about-page" component={AboutPage} />
                        <Route path="/contact-page" component={ContactPage} />
                        <Route path="/login" component={ (props) => <Login handleUserFunction={ (e) => handleUserFunction(e) } {...props} /> } />
                        <Route path="/register" component={ (props) => <Register handleUserFunction={ (e) => handleUserFunction(e) } {...props} /> } />
                        <Route path="/reset" component={ (props) => <Reset handleUserFunction={ (e) => handleUserFunction(e) } {...props} /> } />
                    </Switch>
                    {userPages ? <Footer /> : null}
              </BrowserRouter>
        </div>
    );
}