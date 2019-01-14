import React, { Component } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE_SMALL } from '../DataConfig';
import './Actors.css';

export default class Actors extends Component {
  state = {};

  render() {
    return (
      <div className="containerActor">
        <img
          src={
            this.props.actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE_SMALL}${
                  this.props.actor.profile_path
                }`
              : '/pics/no_image.png'
          }
          alt=""
          width="154px"
        />
        <div className="nameStyleContainer">
          <p>{this.props.actor.name}</p> <br />
          <p>Character : {this.props.actor.character}</p>
        </div>
      </div>
    );
  }
}
