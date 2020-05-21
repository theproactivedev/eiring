import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default Content;
