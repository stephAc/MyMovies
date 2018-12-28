import React, { Component } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import './BtnSlideBar.css';

export default class BtnSlideBar extends Component {
  state = {};

  handleOpenSlideBar = () => {
    let sideBar = document.getElementById('sideBar');
    let btnOpenSideBar = document.getElementById('btnOpenSideBar');

    sideBar.style.width = sideBar.style.width === '0px' ? '150px' : '0px';

    btnOpenSideBar.style.display = 'none';
  };

  render() {
    return (
      <button
        className="btnCircleSide"
        id="btnOpenSideBar"
        onClick={this.handleOpenSlideBar}
      >
        <IoMdArrowBack className="iconSideBare" />
      </button>
    );
  }
}
