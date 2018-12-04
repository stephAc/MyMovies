import React from 'react';
import './SearchBar.css';
import { withRouter } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';

class SearchBar extends React.Component {
  state = {
    searchField: '',
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
