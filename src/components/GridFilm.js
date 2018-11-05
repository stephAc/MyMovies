import React, { Component } from 'react';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  MOVIE_POPULAR,
} from './DataConfig';

const style = {
  grid: {
    margin: 'auto',
    width: '80%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
    border: '2px solid #f76707',
    borderRadius: '5px',
    backgroundColor: '#fff4e6',
    textAlign: 'center',
  },
  gridElement: {
    border: '2px solid #ffa94d',
    borderRadius: '5px',
    backgroundColor: '#ffd8a8',
    padding: '1em',
    color: '#d9480f',
  },
};

export default class GridFilm extends Component {
  state = {
    movies: [],
    actualPage: 0,
    totalPageRequest: 0,
  };

  componentDidMount() {
    const moviePopularRequest = `${API_URL}${MOVIE_POPULAR}${API_KEY}&page=1`;
    this.getMoviePopular(moviePopularRequest);
  }

  getMoviePopular = moviePopularRequest => {
    fetch(moviePopularRequest)
      .then(result => result.json())
      .then(result => {
        console.log(result); //test data,
        this.setState({
          //on ajoute les nouveaux films au films qu'on a déjà
          movies: [...this.state.movies, ...result.results],
          actualPage: result.page,
          totalPageRequest: result.total_pages,
        });
      });
  };

  render() {
    return (
      <div style={style.grid}>
        {this.state.movies.map(function(item, key) {
          return (
            <div style={style.gridElement} key={key}>
              {item.title}
              <br />
              {item.id}
              <br />
              {item.popularity}
            </div>
          );
        })}
      </div>
    );
  }
}
