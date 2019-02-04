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
    console.log('ici');

    event.preventDefault();
    const FORM_DATA = new FormData(event.target);
    let jsonObject = {};
    for (const [key, value] of FORM_DATA.entries()) {
      jsonObject[key] = value;
    }

    fetch('http://localhost:4000/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(jsonObject),
    })
      .then(() => {
        this.setState({ logName: '', logPwd: '' });
        window.location.replace('http://localhost:3000/');
      })
      .catch(err => console.log('fetch error ' + err.message));
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

        <form onSubmit={this.handleSubmit}>
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
          {/* <input
            className="btnSubmit"
            type="submit"
            value="S'identifier"
            onClick={this.handleSubmit}
          /> */}
          <button className="btnSubmit">S'identifier</button>
          <Link to={`/mymovies/inscription`}>
            <div className="accountLink">S'inscrire ?</div>
          </Link>
        </form>
      </div>
    );
  }
}
