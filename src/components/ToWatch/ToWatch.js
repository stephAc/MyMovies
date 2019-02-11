import React, { Component } from 'react';
import Poster from '../Poster/Poster';
import { API_URL, API_KEY } from '../DataConfig';
import Log from '../Login/Log';
import './ToWatch.css';
import ReturnTopPage from '../ReturnTopPage/ReturnTopPage';
import { withRouter } from 'react-router-dom';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';

// export default
class ToWatch extends Component {
  state = {
    movie: [],
    id: '',
  };

  componentDidMount() {
    console.log('did mount ' + this.props.match.params.id);
    this.setState(
      () => ({
        id: this.props.match.params.id,
      }),
      () => this.fetchData(),
    );
  }

  fetchData = () => {
    console.log('fetchData ' + this.state.id);
    let req = `http://localhost:4000/towatchuserfilm/${this.state.id}`;
    fetch(req, { mode: 'cors' })
      .then(result => result.json())
      .then(result => {
        console.log(result);

        this.fetchFilm(result);
      })
      .catch(function(error) {
        console.log('Request failed', error);
      });
  };

  fetchFilm = res => {
    console.log('fetchFilm ' + res);

    res.forEach(filmId => {
      const requestFilm = `${API_URL}movie/${filmId}${API_KEY}&language=en-US`;
      console.log('req: ' + requestFilm);
      fetch(requestFilm)
        .then(result => result.json())
        .then(result => {
          this.setState(prevState => ({
            movie: [...prevState.movie, ...result.results],
          }));
        });
    });

    console.log('movie: ' + this.state.movie[0]);
  };

  render() {
    return (
      <React.Fragment>
        <Log />
        <BtnSlideBar />
        {!!this.state.movie.length ? (
          <div className="grid">
            {this.state.movie.map(function(item, key) {
              return (
                <div key={key}>
                  <Poster film={item} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="centerDiv">
            <img
              src="/pics/error.png"
              alt="Film not found"
              height="300"
              width="300"
              style={{ borderRadius: 10 }}
            />
          </div>
        )}

        <ReturnTopPage />
      </React.Fragment>
    );
  }
}

export default withRouter(ToWatch);
