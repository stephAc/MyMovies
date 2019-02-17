import React, { Component } from 'react';

//Context
const MyContext = React.createContext();

//Context provider, where the data lives
export class MyProvider extends Component {
  state = {
    name: '',
    log: false,
    idUser: '',
  };

  componentDidMount() {
    let name = localStorage.getItem('name');
    let idUser = localStorage.getItem('idUser');
    this.setState(() => ({
      name,
      idUser,
    }));

    if (name === null) {
      this.setState(() => ({
        log: false,
      }));
    } else {
      this.setState(() => ({
        log: true,
      }));
    }
  }

  logIn = log => {
    this.setState({
      log,
    });
  };
  logOut = log => {
    this.setState({
      log,
      name: '',
      idUser: '',
    });
    localStorage.clear();
    window.location.replace('http://localhost:3000/');
  };

  connexion = event => {
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
      .then(result => result.json())
      .then(result => {
        if (!result) {
          alert('Identifiant ou mot de passe incorrect');
        } else {
          localStorage.setItem('name', result[0]);
          localStorage.setItem('idUser', result[1]);
          window.location.replace('http://localhost:3000/');
        }
      })
      .catch(err => console.log('fetch error ' + err.message));
  };

  checkForm = event => {
    event.preventDefault();
    let conform = true;
    let inputs = document
      .getElementById('formInscription')
      .getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
      if (conform) {
        conform = inputs[i].className === 'validInput' ? true : false;
      }
    }

    if (conform) {
      if (this.state.pwd === this.state.confirmedPwd) {
        this.inscription(event);
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

  inscription = event => {
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
      .then(result => result.json())
      .then(result => {
        console.log(result);
        if (!result) {
          alert('Identifiant déjà pris');
        } else {
          console.log('inscription');
          this.inscriptionConnexion(jsonObject);
        }
      })
      .catch(err => console.log('fetch error ' + err.message));
  };

  inscriptionConnexion = jsonObject => {
    fetch('http://localhost:4000/autoconnexion', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(jsonObject),
    })
      .then(result => result.json())
      .then(result => {
        localStorage.setItem('name', result[0]);
        localStorage.setItem('idUser', result[1]);
        window.location.replace('http://localhost:3000/');
      })
      .catch(err => console.log('fetch error ' + err.message));
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          logIn: this.logIn,
          logOut: this.logOut,
          connexion: this.connexion,
          checkForm: this.checkForm,
          deleteUser: this.deleteUser,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyContext;
