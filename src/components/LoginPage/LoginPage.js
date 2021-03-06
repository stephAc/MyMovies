import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';
import MyContext from '../../contexts/context';
export default class LoginPage extends Component {
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
      <React.Fragment>
        <BtnSlideBar />
        <MyContext.Consumer>
          {context => (
            <form
              className="formDisplay"
              onSubmit={event => context.connexion(event)}
            >
              <h2 className="titleStyle">Connexion</h2>
              <input
                className="inputStyle"
                type="text"
                name="logName"
                value={this.state.logName}
                onChange={this.handleChange}
                placeholder="Identifiant"
              />
              <input
                className="inputStyle"
                type="password"
                name="logPwd"
                value={this.state.logPwd}
                onChange={this.handleChange}
                placeholder="Mot de passe"
              />
              {/* <input
                className="submitStyle"
                type="submit"
                value="S'identifier"
                onClick={this.handleSubmit}/>
              */}
              <button className="btnSubmit">S'identifier</button>
              <Link to={`/mymovies/inscription`}>
                <div className="accountLink">S'inscrire ?</div>
              </Link>
            </form>
          )}
        </MyContext.Consumer>
      </React.Fragment>
    );
  }
}
