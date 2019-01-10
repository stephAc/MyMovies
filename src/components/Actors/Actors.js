import React, { Component } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE_SMALL } from '../DataConfig';
import './Actors.css';

export default class Actors extends Component {
  state = {};

  render() {
    return (
      <div>
        <img
          src={
            this.props.actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE_SMALL}${
                  this.props.actor.profile_path
                }`
              : ''
          }
          alt=""
        />
        <p>name</p>
      </div>
    );
  }
}
