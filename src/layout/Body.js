import React from 'react';
import GridFilmHome from '../components/GridFilmHome';
import { Switch, Route } from 'react-router-dom';
import Log from '../components/Log';
import FilmDescription from '../components/FilmDescription';
import ResultResearch from '../components/ResultResearch';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GridFilmHome} />
      <Route exact path="/connexion" component={Log} />
      <Route path="/film/description/:idFilm" component={FilmDescription} />
      <Route path="/film/research/:query" component={ResultResearch} />
    </Switch>
  );
};
