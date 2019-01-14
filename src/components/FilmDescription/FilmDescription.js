import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../DataConfig';
import './FilmDescription.css';
import Log from '../Login/Log';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';
import Actors from '../Actors/Actors';

export default class FilmDescription extends Component {
  state = {
    id: this.props.match.params.idFilm,
    film: '',
    actors: '',
  };

  componentDidMount() {
    const requestFilm = `${API_URL}movie/${
      this.state.id
    }${API_KEY}&language=en-US`;
    const requestActors = `${API_URL}movie/${
      this.state.id
    }/credits?api_key=22232165bd2420fd47b1eb7520ab231c`;
    this.getRequestFilm(requestFilm);
    this.getRequestActors(requestActors);
  }

  getRequestFilm = requestFilm => {
    fetch(requestFilm)
      .then(result => result.json())
      .then(result => {
        this.setState({
          film: result,
        });
      });
  };

  getRequestActors = requestActors => {
    fetch(requestActors)
      .then(result => result.json())
      .then(result => {
        console.log(result.cast);
        this.setState({
          actors: result.cast,
        });
      });
  };

  render() {
    return (
      <div>
        <Log />
        <BtnSlideBar />
        <div className="container">
          <img
            className="poster"
            src={
              this.state.film.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                    this.state.film.poster_path
                  }`
                : '/pics/error.png'
            }
            alt=""
            width="400px"
          />
          <div className="childContainer">
            <p className="filmTitle">{this.state.film.title}</p>
            <p>
              Note :{' '}
              <div className="noteStyle">
                {this.state.film.vote_average}
                /10
              </div>
              <br /> Date : {this.state.film.release_date}
            </p>
            <br />
            <p>{this.state.film.overview}</p>
          </div>
        </div>
        {!!this.state.actors.length ? (
          <div className="gridActor">
            {this.state.actors.map(function(item, key) {
              return (
                <div key={key}>
                  <Actors actor={item} />
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <p>Actor not find</p>
          </div>
        )}
      </div>
    );
  }
}
