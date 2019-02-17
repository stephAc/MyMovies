import React from 'react';
import GridFilmHome from '../../components/GridFilmHome/GridFilmHome';
import { Switch, Route } from 'react-router-dom';
// import Log from '../components/Log/Log';
import FilmDescription from '../../components/FilmDescription/FilmDescription';
import ResultResearch from '../../components/ResultResearch/ResultResearch';
import SideBar from '../../components/SideBar/SideBar';
import LoginPage from '../../components/LoginPage/LoginPage';
import './Body.css';
import InscriptionForm from '../../components/InscriptionForm/InscriptionForm';
import SearchPage from '../../components/SearchPage/SearchPage';
import ToWatch from '../../components/ToWatch/ToWatch';
import Account from '../../components/Account/Account';
import MyContext from '../../contexts/context';

export default () => {
  return (
    <div className="containerBody">
      <MyContext.Consumer>
        {context => (
          <Switch>
            <Route exact path="/" component={GridFilmHome} />
            {/* <Route exact path="/connexion" component={Log} /> */}
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/moncompte/:id" component={Account} />

            {context.state.log ? (
              <Route
                exact
                path="/film/description/:idFilm"
                render={props => (
                  <FilmDescription {...props} idUser={context.state.idUser} />
                )}
              />
            ) : (
              <Route
                exact
                path="/film/description/:idFilm"
                component={FilmDescription}
              />
            )}

            <Route
              exact
              path="/film/research/:query"
              component={ResultResearch}
            />
            <Route
              exact
              path="/film/research/genre/:genre"
              component={ResultResearch}
            />
            <Route exact path="/film/search" component={SearchPage} />
            <Route
              exact
              path="/mymovies/inscription"
              component={InscriptionForm}
            />
            <Route exact path="/towatch/:id" component={ToWatch} />
          </Switch>
        )}
      </MyContext.Consumer>
      <SideBar />
    </div>
  );
};
