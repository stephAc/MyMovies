import React, { Component } from 'react';
import './SideBar.css';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { withRouter } from 'react-router-dom';
class SideBar extends Component {
  state = {};

  handleClickHide = () => {
    let sideBar = document.getElementById('sideBar');
    sideBar.style.width = sideBar.style.width === '0px' ? '20%' : '0px';
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
              onClick={() => this.handleGenreResearch('Action')}
            >
              Action
            </button>
          </li>
          <li>
            <button
              className="btnSideBar"
              id="adventure"
              onClick={() => this.handleGenreResearch('Adventure')}
            >
              Adventure
            </button>
          </li>
          <li>
            <button
              className="btnSideBar"
              id="animation"
              onClick={() => this.handleGenreResearch('Animation')}
            >
              Animation
            </button>
          </li>
          <li>
            <button
              className="btnSideBar"
              id="comedy"
              onClick={() => this.handleGenreResearch('Comedy')}
            >
              Comedy
            </button>
          </li>
          <li>
            <button
              className="btnSideBar"
              id="horror"
              onClick={() => this.handleGenreResearch('Horror')}
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
