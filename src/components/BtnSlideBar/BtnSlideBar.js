import React, { Component } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import './BtnSlideBar.css';

export default class BtnSlideBar extends Component {
  state = {};

  handleOpenSlideBar = () => {
    let sideBar = document.getElementById('sideBar');
    sideBar.style.width = sideBar.style.width === '0px' ? '20%' : '0px';
    let btnOpenSideBar = document.getElementById('btnOpenSideBar');
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
