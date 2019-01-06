import React, { Component } from 'react';
import { IoIosMenu } from 'react-icons/io';
import './BtnHamburger.css';

export default class BtnHamburger extends Component {
  state = {};

  handleClick = () => {
    let sideBar = document.getElementById('sideBar');
    let btnOpenSideBar = document.getElementById('btnOpenSideBar');

    sideBar.style.width = sideBar.style.width === '0px' ? '150px' : '0px';
    btnOpenSideBar.style.display =
      sideBar.style.width === '0px' ? 'block' : 'none';
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
