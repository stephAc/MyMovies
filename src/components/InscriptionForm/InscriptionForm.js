import React, { Component, Fragment } from 'react';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';
import Log from '../Login/Log';
import './InscriptionForm.css';
import MyContext from '../../contexts/context';

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

  render() {
    return (
      <Fragment>
        <BtnSlideBar />
        <Log />
        <MyContext.Consumer>
          {context => (
            <form
              id="formInscription"
              className="displayFormInscripton"
              onSubmit={event => context.checkForm(event)}
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
          )}
        </MyContext.Consumer>
      </Fragment>
    );
  }
}
