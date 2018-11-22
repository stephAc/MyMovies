import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

const style = {
  textAlign: 'left',
  borderRadius: '20px 10px',
  height: '40px',
  width: '800px',
  paddingLeft: '15px',
  marginLeft: '10px',
  marginRight: '10px',
};

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
        style={style}
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
