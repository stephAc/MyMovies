import React from 'react';
import './SearchBar.css';
import { withRouter } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { API_URL, API_KEY, MOVIE_POPULAR } from '../DataConfig';

class SearchBar extends React.Component {
  state = {
    searchField: '',
    srchInput: '',
  };

  handleEntree = event => {
    if (this.state.searchField !== '') {
      if (event.key === 'Enter' || event.type === 'click') {
        this.props.history.push(`/film/research/${this.state.searchField}`);
        this.setState({ searchField: '' });
      }
      // } else if (this.state.searchField.length >= 2) {
      //   this.getMoviePopular();
      // }
    }
  };

  // getMoviePopular = () => {
  //   let inputRequest = `${API_URL}${MOVIE_POPULAR}${API_KEY}&page=${this.state
  //     .actualPage + 1}`;

  //   fetch(inputRequest)
  //     .then(result => result.json())
  //     .then(result => {
  //       console.log(result); //test data,
  //       this.setState(prevState => ({
  //         //on ajoute les nouveaux films aux films qu'on a déjà
  //         actualPage: result.page,
  //         totalPageRequest: result.total_pages,
  //         fetching: false,
  //       }));
  //     });
  // };

  handleInputChange = event => {
    this.setState({ searchField: event.target.value });
  };

  // handleClick = event => {
  //   event.target.style = 'border: 2px solid gold;';
  // };

  render() {
    return (
      <React.Fragment>
        <input
          className="searchBar"
          type="text"
          placeholder="Search.."
          value={this.state.searchField}
          onChange={this.handleInputChange}
          onKeyPress={this.handleEntree}
          list={this.state.srchInput}
        />
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
