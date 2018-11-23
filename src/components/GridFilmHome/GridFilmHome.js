import React, { Component } from 'react';
import {
  API_URL,
  API_KEY,
  //IMAGE_BASE_URL,
  // BACKDROP_SIZE,
  //POSTER_SIZE,
  MOVIE_POPULAR,
} from '../DataConfig';
import ReturnTopPage from '../ReturnTopPage/ReturnTopPage';
import Poster from '../Poster';
import Log from '../Login/Log';
import './GridFilmHome.css';

export default class GridFilmHome extends Component {
  state = {
    movies: [],
    actualPage: 0,
    totalPageRequest: 0,
    fetching: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const moviePopularRequest = `${API_URL}${MOVIE_POPULAR}${API_KEY}&page=1`;
    this.getMoviePopular(moviePopularRequest);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  //Charger plus de composant avec le scroll
  loadMorePoster = () => {
    if (!this.state.fetching) {
      let moviePopularRequest = `${API_URL}${MOVIE_POPULAR}${API_KEY}&page=${this
        .state.actualPage + 1}`;
      this.getMoviePopular(moviePopularRequest);
    }
  };

  //Handle pour le scroll en bas de page
  handleScroll = () => {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      this.loadMorePoster();
    }
  };

  //Methode pour Json
  getMoviePopular = moviePopularRequest => {
    this.setState({ fetching: true });

    fetch(moviePopularRequest)
      .then(result => result.json())
      .then(result => {
        console.log(result); //test data,
        this.setState(prevState => ({
          //on ajoute les nouveaux films aux films qu'on a déjà
          movies: [...prevState.movies, ...result.results],
          actualPage: result.page,
          totalPageRequest: result.total_pages,
          fetching: false,
        }));
      });
  };

  render() {
    return (
      <React.Fragment>
        <Log />
        <div className="grid">
          {this.state.movies.map(function(item, key) {
            return (
              <div key={key}>
                <Poster film={item} />
              </div>
            );
          })}
        </div>
        <ReturnTopPage />
      </React.Fragment>
    );
  }
}
