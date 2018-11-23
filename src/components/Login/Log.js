import React, { Component } from 'react';
import './Log.css';

export default class Log extends Component {
  state = {
    logName: '',
    logPwd: '',
  };

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    alert('Log name : ' + this.state.logName + ' Pwd ' + this.state.logPwd);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="formStyle" id="logForm">
          <h2 className="title">Login to your account</h2>
          <form>
            <input
              className="styleBox"
              type="text"
              name="logName"
              value={this.state.logName}
              onChange={this.handleChange}
              placeholder="Full Name"
            />
            <input
              className="styleBox"
              type="password"
              name="logPwd"
              value={this.state.logPwd}
              onChange={this.handleChange}
              placeholder="Mot de passe"
            />
            <input
              className="btnSubmit"
              type="submit"
              value="S'identifier"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}
