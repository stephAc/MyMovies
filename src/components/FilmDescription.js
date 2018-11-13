import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from './DataConfig';

export default class FilmDescription extends Component {
  state = {
    id: this.props.match.params.idFilm,
    film: '',
  };

  componentDidMount() {
    const requestFilm = `${API_URL}movie/${
      this.state.id
    }${API_KEY}&language=en-US`;
    this.getRequestFilm(requestFilm);
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

  render() {
    return (
      <div>
        <img
          src={
            this.state.film.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${this.state.film.poster_path}`
              : '../assets/logos/app_logo.bmp'
          }
          alt=""
          width="100%"
        />
        <br />
        {this.state.film.title}
        <br />
        {this.state.film.id}
        <br />
        {this.state.film.popularity}
      </div>
    );
  }
}
