import React, { Component } from 'react';
import { IoIosMenu } from 'react-icons/io';
import './BtnHamburger.css';

export default class BtnHamburger extends Component {
  state = {};

  handleClick = () => {
    let sideBar = document.getElementById('sideBar');
    sideBar.style.width = sideBar.style.width === '0px' ? '20%' : '0px';
  };

  render() {
    return (
      <div>
        <button className="btnIconMenu" onClick={this.handleClick}>
          <IoIosMenu className="iconStyleMenu" />
        </button>
      </div>
    );
  }
}
