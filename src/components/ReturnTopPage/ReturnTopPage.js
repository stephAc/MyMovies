import React, { Component } from 'react';
import './ReturnTopPage.css';

export default class ReturnTopPage extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      document.getElementById('returnTopBtn').style.display = 'block';
    } else {
      document.getElementById('returnTopBtn').style.display = 'none';
    }
  };

  hover = e => {
    e.target.style.opacity = '1';
  };

  notHover = e => {
    e.target.style.opacity = '0.5';
  };

  topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera);
  };

  render() {
    return (
      <button
        className="btnReturnTop"
        type="button"
        onClick={this.topFunction}
        onMouseOver={this.hover}
        onMouseOut={this.notHover}
        id="returnTopBtn"
      >
        ^
      </button>
    );
  }
}
