import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from './DataConfig';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: '50px',
    padding: '15px',
  },
  childContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: '50px',
    marginRight: '50px',
  },
  poster: {
    maxHeight: '400px',
    minWidth: '210px',
  },
  title: {
    alignSelf: 'center',
    fontSize: '35px',
    fontStyle: 'oblique',
    fontWeight: 'bold',
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

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
        <div style={style.container}>
          <img
            style={style.poster}
            src={
              this.state.film.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                    this.state.film.poster_path
                  }`
                : '../assets/logos/app_logo.bmp'
            }
            alt=""
            width="400px"
          />
          <div style={style.childContainer}>
            <div style={style.title}>{this.state.film.title}</div>
            <div>Score {this.state.film.vote_average}</div>
            <div>Date {this.state.film.release_date}</div>
            <div>{this.state.film.overview}</div>
          </div>
        </div>
      </div>
    );
  }
}
