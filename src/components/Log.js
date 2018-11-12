import React, { Component } from 'react';

const style = {
  popup: {
    width: '300px',
    height: '300px',
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'gray',
    textAlign: 'center',
    zIndex: '1',
    boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
  },
};
export default class Log extends Component {
  state = { nameValue: '' };

  handleChange = event => {
    this.setState({ nameValue: event.nameValue });
  };

  render() {
    return (
      <form style={style.popup}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.nameValue}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
