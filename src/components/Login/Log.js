import React, { Component } from 'react';
import './Log.css';
import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
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
    this.setState({ logName: '', logPwd: '' });
  };

  handleClose = () => {
    document.getElementById('logForm').style.display = 'none';
  };

  render() {
    return (
      <div>
        <div className="formStyle" id="logForm">
          <h2 className="title flexRow">
            Connexion
            <button className="btnClose" onClick={this.handleClose}>
              <IoIosClose className="iconCloseLog" />
            </button>
          </h2>

          <form>
            <input
              className="styleBox"
              type="text"
              name="logName"
              value={this.state.logName}
              onChange={this.handleChange}
              placeholder="Identifiant"
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
            <Link to={``}>
              <div className="accountLink">S'inscrire ?</div>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
