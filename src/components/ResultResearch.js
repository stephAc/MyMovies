import React, { Component } from 'react';
import Poster from './Poster';
import { API_URL, API_KEY } from './DataConfig';

export default class ResultResearch extends Component {
  state = {
    searchField: this.props.match.params.query,
    movie: [],
  };

  componentDidMount() {
    console.log('la');
    const req = `${API_URL}search/movie${API_KEY}&query=${
      this.state.searchField
    }&page=1&include_adult=false`;

    fetch(req)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({ movie: result.results });
      });
  }

  render() {
    return (
      <div>
        <div>la</div>
        {this.state.movie.length &&
          this.state.movie.map(function(item, key) {
            return (
              <div key={key}>
                <Poster film={item} />
              </div>
            );
          })}
      </div>
    );
  }
}
