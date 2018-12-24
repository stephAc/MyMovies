import React, { Component } from 'react';
import './SideBar.css';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default class SideBar extends Component {
  state = {};

  handleClickHide = () => {
    let sideBar = document.getElementById('sideBar');
    sideBar.style.width = sideBar.style.width === '0px' ? '20%' : '0px';
  };

  render() {
    return (
      <div className="sideBar" id="sideBar">
        <button className="btnSideBar" onClick={this.handleClickHide}>
          <IoIosArrowRoundForward className="backArrIcon" />
        </button>
        <ul className="ulSideBar">
          <li>
            <button className="btnSideBar">Action</button>
          </li>
          <li>
            <button className="btnSideBar">Adventure</button>
          </li>
          <li>
            <button className="btnSideBar">Animation</button>
          </li>
          <li>
            <button className="btnSideBar">Comedy</button>
          </li>
          <li>
            <button className="btnSideBar">Horror</button>
          </li>
        </ul>
      </div>
    );
  }
}
