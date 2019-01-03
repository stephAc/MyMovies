import React, { Component, Fragment } from 'react';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';
import Log from '../Login/Log';
import './InscriptionForm.css';

export default class InscriptionForm extends Component {
  state = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmedPassword: '',
  };

  handleInput = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    alert(
      this.state.nom +
        this.state.prenom +
        this.state.email +
        this.state.password,
    );
    event.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <BtnSlideBar />
        <Log />
        <form className="displayFormInscripton">
          <h2 className="titleInscription">Inscription</h2>
          <input
            className="inputStyleInscription"
            type="text"
            name="nom"
            placeholder="Nom"
            value={this.state.nom}
            required
            onChange={this.handleInput}
          />
          <input
            className="inputStyleInscription"
            type="email"
            name="prenom"
            value={this.state.prenom}
            placeholder="E-mail"
            required
            onChange={this.handleInput}
          />
          <input
            className="inputStyleInscription"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            required
            onChange={this.handleInput}
          />
          <input
            className="inputStyleInscription"
            type="password"
            name="confirmedPassword"
            value={this.state.confirmedPassword}
            placeholder="Confirme password"
            required
            onChange={this.handleInput}
          />
          <input
            className="btnStyleInscription"
            type="submit"
            value="S'identifier"
            onClick={this.handleSubmit}
          />
        </form>
      </Fragment>
    );
  }
}
