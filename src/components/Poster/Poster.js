import React, { Component } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../DataConfig';
import { Link } from 'react-router-dom';

export default class Poster extends Component {
  state = {};

  // handleClic = event => {
  //   <Link to={'/film/description/${this.props.film.title}'} />;
  //   alert('name : ' + this.props.film.title);
  // };

  render() {
    return (
      <div>
        <Link to={`/film/description/${this.props.film.id}`}>
          <img
            src={
              this.props.film.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                    this.props.film.poster_path
                  }`
                : '../assets/logos/app_logo.bmp'
            }
            alt=""
            width="95%"
            // onClick={this.handleClic}
          />
        </Link>
      </div>
    );
  }
}
