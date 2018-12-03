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
      <React.Fragment>
        <input
          className="searchBar"
          type="text"
          placeholder="Search.."
          value={this.state.searchField}
          onChange={this.handleInputChange}
          onKeyPress={this.handleEntree}
        />
        <button className="btnSearch" type="submit" />
      </React.Fragment>
    );
  }
}

export default withRouter(SearchBar);
