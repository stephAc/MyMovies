import React, { Component } from 'react';
import Poster from '../Poster';
import { API_URL, API_KEY } from '../DataConfig';
import Log from '../Login/Log';
import './ResultResearch.css';
import ReturnTopPage from '../ReturnTopPage/ReturnTopPage';
import { withRouter } from 'react-router-dom';

// export default
class ResultResearch extends Component {
  state = {
    movie: [],
    urlQuery: '',
  };

  componentDidMount() {
    this.setState(
      () => ({ urlQuery: this.props.match.params.query }),
      () => this.fetchData(),
    );
  }

  componentDidUpdate() {
    if (this.props.match.params.query !== this.state.urlQuery) {
      this.setState(
        () => ({ urlQuery: this.props.match.params.query }),
        () => this.fetchData(),
      );
    }
  }

  fetchData = () => {
    const req = `${API_URL}search/movie${API_KEY}&query=${
      this.state.urlQuery
    }&page=1&include_adult=false`;

    fetch(req)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({ movie: result.results });
      });
  };

  render() {
    return (
      <React.Fragment>
        <Log />
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
              alt="Image not found"
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
