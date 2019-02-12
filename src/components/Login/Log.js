import React, { Component } from 'react';
import './Log.css';
import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import MyContext from '../../contexts/context';
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

  handleClose = () => {
    document.getElementById('logForm').style.display = 'none';
  };

  render() {
    return (
      <div className="formStyle" id="logForm">
        <h2 className="title flexRow">
          Connexion
          <button className="btnClose" onClick={this.handleClose}>
            <IoIosClose className="iconCloseLog" />
          </button>
        </h2>

        <MyContext.Consumer>
          {context => (
            <form onSubmit={event => context.connexion(event)}>
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
              <button className="btnSubmit">S'identifier</button>
              <Link to={`/mymovies/inscription`}>
                <div className="accountLink">S'inscrire ?</div>
              </Link>
            </form>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
