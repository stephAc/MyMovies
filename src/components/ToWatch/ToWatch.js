import React, { Component } from 'react';
import { API_URL, API_KEY } from '../DataConfig';
import Poster from '../Poster/Poster';
import Log from '../Login/Log';
import './ToWatch.css';
import ReturnTopPage from '../ReturnTopPage/ReturnTopPage';
import { withRouter } from 'react-router-dom';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';
import { Link } from 'react-router-dom';

// export default
class ToWatch extends Component {
  state = {
    movie: [],
    id: '',
  };

  componentDidMount() {
    this.setState(
      () => ({
        id: this.props.match.params.id,
      }),
      () => this.fetchData(),
    );
  }

  fetchData = () => {
    let req = `http://localhost:4000/towatchuserfilm/${this.state.id}`;
    fetch(req, { mode: 'cors' })
      .then(result => result.json())
      .then(result => {
        this.fetchFilm(result.reverse());
      })
      .catch(function(error) {
        console.log('Request failed', error);
      });
  };

  fetchFilm = res => {
    res.forEach(filmId => {
      const requestFilm = `${API_URL}movie/${filmId}${API_KEY}&language=en-US`;
      fetch(requestFilm)
        .then(result => result.json())
        .then(result => {
          this.setState(prevState => ({
            movie: [...prevState.movie, result],
          }));
        });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Log />
        <BtnSlideBar />
        {!!this.state.movie.length ? (
          <div className="displayPage">
            <h1 className="titleWatch">My To Watch List</h1>
            <div className="gridWatch">
              {this.state.movie.map(function(item, key) {
                return (
                  <div key={key}>
                    <Poster film={item} />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="centerDivWatch">
            <h1 className="titleWatch">My To Watch List</h1>
            <Link to={`/`}>
              <button className="findFilmBtn">Trouver des films</button>
            </Link>
          </div>
        )}

        <ReturnTopPage />
      </React.Fragment>
    );
  }
}

export default withRouter(ToWatch);
