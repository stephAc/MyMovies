import React from 'react';
import GridFilmHome from '../components/GridFilmHome';
import { Switch, Route } from 'react-router-dom';
import Log from '../components/Log';
import FilmDescription from '../components/FilmDescription';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GridFilmHome} />
      <Route exact path="/connexion" component={Log} />
      <Route path="/film/description/:idFilm" component={FilmDescription} />
    </Switch>
  );
};
