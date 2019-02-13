import React, { Component } from 'react';
import './UserDeletMsgBox.css';
import MyContext from '../../contexts/context';
export default class UserDeleteMsgBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdp: '',
    };
  }

  handleInput = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClose = () => {
    document.getElementById('popUpDelete').style.display = 'none';
  };

  handleDelete = id => {
    let jsonObject = { id: id, mdp: this.state.mdp };

    fetch('http://localhost:4000/confirmuser', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(jsonObject),
    })
      .then(result => result.json())
      .then(result => {
        if (result === 1) {
          this.deleteUser(id);
        } else {
          console.log('pas trouve');
        }
      });
  };

  deleteUser = id => {
    let req = `http://localhost:4000/deleteuser/${id}`;
    fetch(req, { mode: 'cors', method: 'DELETE' })
      .then(() => {
        localStorage.clear();
        window.location.replace('http://localhost:3000/');
      })
      .catch(err => console.log('fetch error ' + err.message));
  };

  render() {
    return (
      <div className="popUpDelete" id="popUpDelete">
        <p>Entrez votre mot de passe pour confirmer : </p>
        <br />
        <input
          className="inputDelete"
          type="password"
          placeholder="Mot de passe"
          name="mdp"
          value={this.state.mdp}
          onChange={this.handleInput}
        />
        <div className="btnDeleteDisplay">
          <MyContext.Consumer>
            {context => (
              <button
                onClick={() => this.handleDelete(context.state.idUser)}
                className="popDeleteBtn"
              >
                Supprimer
              </button>
            )}
          </MyContext.Consumer>
          <button
            style={{ backgroundColor: 'red' }}
            onClick={this.handleClose}
            className="popDeleteBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
