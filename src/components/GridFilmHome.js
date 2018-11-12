import React, { Component } from 'react';
import {
  API_URL,
  API_KEY,
  //IMAGE_BASE_URL,
  // BACKDROP_SIZE,
  //POSTER_SIZE,
  MOVIE_POPULAR,
} from './DataConfig';
import ReturnTopPage from './ReturnTopPage';
import Poster from './Poster';

const style = {
  grid: {
    margin: 'auto',
    marginTop: '50px',
    marginBottom: '50px',
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
    color: '#d9480f',
  },
};

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
      <div style={style.grid}>
        {this.state.movies.map(function(item, key) {
          return (
            <div style={style.gridElement} key={key}>
              <Poster film={item} />
            </div>
          );
        })}
        <ReturnTopPage />
      </div>
    );
  }
}
