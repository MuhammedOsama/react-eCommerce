import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import featureCart from './Layout/components/Blocks/FeaturePage'

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/featureCart" exact component={featureCart} />
    </BrowserRouter>
  );
}

export default App;