import React, { Component, Fragment } from 'react';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';
import Log from '../Login/Log';
import './InscriptionForm.css';

export default class InscriptionForm extends Component {
  state = {
    name: '',
    email: '',
    pwd: '',
    confirmedPwd: '',
  };

  handleInput = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  checkForm = event => {
    event.preventDefault();
    console.log(this.state.pwd + ' ' + this.state.confirmedPwd);
    if (this.state.pwd === this.state.confirmedPwd) {
      this.handleSubmit(event);
    } else {
      console.log('incorrect');
    }
  };

  handleSubmit = event => {
    console.log('handle');

    const FORM_DATA = new FormData(event.target);
    let jsonObject = {};
    for (const [key, value] of FORM_DATA.entries()) {
      jsonObject[key] = value;
    }

    fetch('http://localhost:4000/mymovies/inscription', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(jsonObject),
    })
      .then(() => {
        window.location.replace('http://localhost:3000/');
      })
      .catch(err => console.log('fetch error ' + err.message));
  };

  render() {
    return (
      <Fragment>
        <BtnSlideBar />
        <Log />
        <form className="displayFormInscripton" onSubmit={this.checkForm}>
          <h2 className="titleInscription">Inscription</h2>
          <input
            className="inputStyleInscription"
            type="text"
            name="name"
            placeholder="Nom"
            value={this.state.name}
            required
            onChange={this.handleInput}
          />
          <input
            className="inputStyleInscription"
            type="email"
            name="email"
            value={this.state.email}
            placeholder="E-mail"
            required
            onChange={this.handleInput}
          />
          <input
            className="inputStyleInscription"
            type="password"
            name="pwd"
            value={this.state.pwd}
            placeholder="Password"
            required
            onChange={this.handleInput}
          />
          <input
            className="inputStyleInscription"
            type="password"
            name="confirmedPwd"
            value={this.state.confirmedPwd}
            placeholder="Confirme password"
            required
            onChange={this.handleInput}
          />
          <button className="btnSub">S'inscrire</button>
        </form>
      </Fragment>
    );
  }
}
