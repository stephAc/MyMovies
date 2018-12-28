import React, { Component } from 'react';
import Poster from '../Poster/Poster';
import { API_URL, API_KEY } from '../DataConfig';
import Log from '../Login/Log';
import './ResultResearch.css';
import ReturnTopPage from '../ReturnTopPage/ReturnTopPage';
import { withRouter } from 'react-router-dom';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';

// export default
class ResultResearch extends Component {
  state = {
    movie: [],
    urlQuery: undefined,
    genre: undefined,
  };

  componentDidMount() {
    if (this.props.match.params.query !== undefined) {
      this.setState(
        () => ({
          urlQuery: this.props.match.params.query,
        }),
        () => this.fetchData(0),
      );
    } else {
      this.setState(
        () => ({
          genre: this.props.match.params.genre,
        }),
        () => this.fetchData(1),
      );
    }
  }

  componentDidUpdate() {
    if (this.props.match.params.query !== this.state.urlQuery) {
      this.setState(
        () => ({
          urlQuery: this.props.match.params.query,
        }),
        () => this.fetchData(0),
      );
    } else if (this.props.match.params.genre !== this.state.genre) {
      this.setState(
        () => ({
          genre: this.props.match.params.genre,
        }),
        () => this.fetchData(1),
      );
    }
  }

  fetchData = codeRef => {
    let req = '';

    switch (codeRef) {
      case 0:
        req = `${API_URL}search/movie${API_KEY}&query=${
          this.state.urlQuery
        }&page=1&include_adult=false`;
        fetch(req)
          .then(result => result.json())
          .then(result => {
            console.log(result);
            this.setState({ movie: result.results });
          })
          .catch(function(error) {
            console.log('Request failed', error);
          });
        break;
      case 1:
        req = `${API_URL}discover/movie${API_KEY}&sort_by=popularity.desc&include_adult=false&with_genres=${
          this.state.genre
        }`;
        fetch(req, { mode: 'cors' })
          .then(result => result.json())
          .then(result => {
            console.log(result);
            this.setState({ movie: result.results });
          })
          .catch(function(error) {
            console.log('Request failed', error);
          });
        break;
      default:
    }

    console.log(req);
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

export default withRouter(ResultResearch);
