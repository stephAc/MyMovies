import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from './DataConfig';

const style = {
  textAlign: 'left',
  borderRadius: '20px 10px',
  height: '40px',
  width: '800px',
  paddingLeft: '15px',
  marginLeft: '10px',
  marginRight: '10px',
};

// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
class SearchBar extends React.Component {
  state = {
    searchField: '',
  };

  handleEntree = event => {
    if (event.key === 'Enter') {
      alert(this.state.searchField);
      const req =
        '${API_URL}search/movie?api_key=${API_KEY}&query=${this.state.searchField}';
    }
  };

  handleInputChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    return (
      <input
        style={style}
        type="text"
        placeholder="Search.."
        valueinput={this.state.searchField}
        onChange={this.handleInputChange}
        onKeyPress={this.handleEntree}
      />
    );
  }
}

export default SearchBar;
