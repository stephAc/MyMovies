import React from 'react';
import './SearchBar.css';
import { withRouter } from 'react-router-dom';
import { IoIosSearch, IoIosCloudyNight } from 'react-icons/io';
import { API_URL, API_KEY } from '../DataConfig';

class SearchBar extends React.Component {
  state = {
    searchField: '',
    srchInput: [],
  };

  handleEntree = event => {
    if (this.state.searchField !== '') {
      if (event.key === 'Enter' || event.type === 'click') {
        this.props.history.push(`/film/research/${this.state.searchField}`);
        this.setState({ searchField: '' });
      }
    }
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ searchField: value });
    if (value.length >= 1) {
      this.getMoviePopular(value);
    }
  };

  getMoviePopular = searchField => {
    let inputRequest = `${API_URL}search/movie${API_KEY}&query=${searchField}&page=1&include_adult=false`;

    fetch(inputRequest)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.putInFormInfo(result.results);
      });
  };

  putInFormInfo = list => {
    // Récupère la liste des titre
    this.setState({
      srchInput: list.map(elt => {
        return elt.title;
      }),
    });
    console.log(this.state.srchInput);
  };

  // handleClick = event => {
  //   event.target.style = 'border: 2px solid gold;';
  // };

  render() {
    const { searchField, srchInput } = this.state;

    return (
      <React.Fragment>
        <input
          className="searchBar"
          type="text"
          placeholder="Search.."
          value={searchField}
          onChange={this.handleInputChange}
          onKeyPress={this.handleEntree}
          list="srchInputList"
          name="srchInputList"
        />

        {srchInput.length > 0 ? (
          <datalist id="srchInputList">
            {srchInput.map((item, index) => {
              return <option key={index} value={item} />;
            })}
          </datalist>
        ) : (
          ''
        )}

        <button
          id="btnReSearch"
          className="btnSearch"
          onClick={this.handleEntree}
        >
          <IoIosSearch className="iconSearch" />
        </button>
      </React.Fragment>
    );
  }
}

export default withRouter(SearchBar);
