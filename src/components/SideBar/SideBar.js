import React, { Component } from 'react';
import './SideBar.css';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { withRouter } from 'react-router-dom';
class SideBar extends Component {
  state = {};

  handleClickHide = () => {
    let sideBar = document.getElementById('sideBar');
    let btnOpenSideBar = document.getElementById('btnOpenSideBar');

    sideBar.style.width = sideBar.style.width === '0px' ? '150px' : '0px';

    btnOpenSideBar.style.display = 'block';
  };

  handleGenreResearch = genre => {
    this.props.history.push(`/film/research/genre/${genre}`);
  };

  render() {
    return (
      <div className="sideBar" id="sideBar">
        <button className="btnSideBar" onClick={this.handleClickHide}>
          <IoIosArrowRoundForward className="backArrIcon" />
        </button>

        <ul className="ulSideBar">
          <li>
            <button
              className="btnSideBar"
              onClick={() => this.handleGenreResearch(28)} //Action
            >
              Action
            </button>
          </li>
          <li>
            <button
              className="btnSideBar"
              id="adventure"
              onClick={() => this.handleGenreResearch(12)} //Adventure
            >
              Adventure
            </button>
          </li>
          <li>
            <button
              className="btnSideBar"
              id="animation"
              onClick={() => this.handleGenreResearch(16)} //Animation
            >
              Animation
            </button>
          </li>
          <li>
            <button
              className="btnSideBar"
              id="comedy"
              onClick={() => this.handleGenreResearch(35)} //Comedy
            >
              Comedy
            </button>
          </li>
          <li>
            <button
              className="btnSideBar"
              id="horror"
              onClick={() => this.handleGenreResearch(27)} //Horror
            >
              Horror
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(SideBar);
