import React from 'react';
import './SearchBar.css';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  state = {
    searchField: '',
    needResultResearch: 'false',
  };

  handleEntree = event => {
    if (event.key === 'Enter') {
      this.props.history.push(`/film/research/${this.state.searchField}`);
    }
  };

  handleInputChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    return (
      <input
        className="searchBar"
        type="text"
        placeholder="Search.."
        value={this.state.searchField}
        onChange={this.handleInputChange}
        onKeyPress={this.handleEntree}
      />
    );
  }
}

export default withRouter(SearchBar);
