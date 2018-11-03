import React from 'react';

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
  render() {
    return (
      <input
        style={style}
        type="text"
        placeholder="Search.."
        onKeyPress={this.handleEntree}
      />
    );
  }

  handleEntree = event => {
    if (event.key === 'Enter') {
      alert('Entrée');
    }
  };
}

export default SearchBar;
