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
    patterns: {
      name: /^.{4,12}$/,
      email: /.+@.+.(com|fr|co.uk)$/,
      pwd: /^((?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,16})$/,
      confirmedPwd: /^((?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,16})$/,
    },
  };

  handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.validate(name, this.state.patterns[name], value);

    this.setState({
      [name]: value,
    });
  };

  validate = (name, regex, value) => {
    if (regex.test(value)) {
      document.getElementsByName(name)[0].className = 'validInput';
    } else {
      document.getElementsByName(name)[0].className = 'invalidInput';
    }
  };

  checkForm = event => {
    event.preventDefault();
    let conform = true;
    let inputs = document
      .getElementById('formInscription')
      .getElementsByTagName('input');

    console.log(inputs.length);
    for (let i = 0; i < inputs.length; i++) {
      console.log(inputs[i].name);
      if (conform) {
        conform = inputs[i].className === 'validInput' ? true : false;
      }
    }

    console.log(conform);
    if (conform) {
      if (this.state.pwd === this.state.confirmedPwd) {
        this.handleSubmit(event);
      } else {
        document.getElementById('inputPwdInscription').className =
          'invalidInput';
        document.getElementById('inputConfirmedPwdInscription').className =
          'invalidInput';
        alert('Mot de passe non confirmé');
      }
    } else {
      alert('Champ(s) mal saisis');
    }
  };

  handleSubmit = event => {
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
        <form
          id="formInscription"
          className="displayFormInscripton"
          onSubmit={this.checkForm}
        >
          <h2 className="titleInscription">Inscription</h2>
          <div>
            <input
              className="inputStyleInscription"
              type="text"
              name="name"
              placeholder="Nom"
              value={this.state.name}
              required
              onChange={this.handleInput}
            />
            <span className="obligatoire">*</span>
            <span className="spanInfo">4 - 12 caractères</span>
          </div>
          <div>
            <input
              className="inputStyleInscription"
              type="email"
              name="email"
              value={this.state.email}
              placeholder="E-mail"
              required
              onChange={this.handleInput}
            />
            <span className="obligatoire">*</span>
            <span className="spanInfo">
              De la forme ....@... com | fr | co.uk
            </span>
          </div>
          <div>
            <input
              id="inputPwdInscription"
              className="inputStyleInscription"
              type="password"
              name="pwd"
              value={this.state.pwd}
              placeholder="Password"
              required
              onChange={this.handleInput}
            />
            <span className="obligatoire">*</span>
            <span className="spanInfo">
              1 Maj, 1 chiffre, 8 - 20 caractères
            </span>
          </div>
          <div>
            <input
              id="inputConfirmedPwdInscription"
              className="inputStyleInscription"
              type="password"
              name="confirmedPwd"
              value={this.state.confirmedPwd}
              placeholder="Confirme password"
              required
              onChange={this.handleInput}
            />
            <span className="obligatoire">*</span>
            <span className="spanInfo">
              1 Maj, 1min, 1 chiffre, 8 - 20 caractères
            </span>
          </div>
          <button className="btnSub">S'inscrire</button>
        </form>
      </Fragment>
    );
  }
}
