import React, { Component } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from './DataConfig';

export default class Poster extends Component {
  state = {};

  handleClic = event => {
    alert('name : ' + this.props.film.title);
  };

  render() {
    return (
      <div>
        <img
          src={
            this.props.film.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${this.props.film.poster_path}`
              : '../assets/logos/app_logo.bmp'
          }
          alt=""
          width="100%"
          onClick={this.handleClic}
        />
        <br />
        {this.props.film.title}
        <br />
        {this.props.film.id}
        <br />
        {this.props.film.popularity}
      </div>
    );
  }
}
