import React, { Component } from 'react';
import './SideBar.css';

export default class SideBar extends Component {
  state = {};

  render() {
    return (
      <div className="sideBar" id="sideBar">
        <button>CLOSE</button>
        <ul>
          <li>Home</li>
        </ul>
      </div>
    );
  }
}
