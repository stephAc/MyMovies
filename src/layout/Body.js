import React from 'react';
import GridFilmHome from '../components/GridFilmHome';
import { Switch, Route } from 'react-router-dom';
import Log from '../components/Log';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GridFilmHome} />
      <Route exact path="/connexion" component={Log} />
    </Switch>
  );
};
