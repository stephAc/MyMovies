import React, { Component } from 'react';
import { IoIosMenu } from 'react-icons/io';
import './BtnHamburger.css';

export default class BtnHamburger extends Component {
  state = {};

  render() {
    return (
      <div>
        <button className="btnIconMenu">
          <IoIosMenu className="iconStyleMenu" />
        </button>
      </div>
    );
  }
}
