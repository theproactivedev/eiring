import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/eiringonzales" component={Home} />
      <Route path="/eiringonzales/portfolio" component={Portfolio} />
      <Route path="/eiringonzales/contact" component={Contact} />
      <Route path="/eiringonzales/*" component={Home} />
    </Switch>
  );
}

export default Content;
