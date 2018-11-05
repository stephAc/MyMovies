import React, { Component } from 'react';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  MOVIE_POPULAR,
} from './DataConfig';

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
      <table>
        <tbody>
          {this.state.movies.map(function(item, key) {
            return (
              <tr key={key}>
                <td>{item.title}</td>
                <td>{item.id}</td>
                <td>{item.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
