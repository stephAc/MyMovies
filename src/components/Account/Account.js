import React, { Component } from 'react';
import './Account.css';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';
import UserDeleteMsgBox from '../UserDeletMsgBox/UserDeletMsgBox';

export default class Account extends Component {
  state = {
    idUser: '',
    name: '',
    email: '',
  };

  componentDidMount() {
    this.setState(
      () => ({
        id: this.props.match.params.id,
      }),
      () => this.fetchData(),
    );
  }

  fetchData = () => {
    let req = `http://localhost:4000/userinfo/${this.state.id}`;
    fetch(req, { mode: 'cors' })
      .then(result => result.json())
      .then(result => {
        this.setState(() => ({
          name: result[0],
          email: result[1],
        }));
      });
  };

  deleteAction = () => {
    let popUpDelete = document.getElementById('popUpDelete');

    popUpDelete.style.display =
      popUpDelete.style.display === 'none' || popUpDelete.style.display === ''
        ? 'block'
        : 'none';
  };

  render() {
    return (
      <div style={{ width: '100%' }}>
        <BtnSlideBar />
        <div className="userContainer">
          <div className="userBack">
            <img
              className="roundImageUser"
              src="/pics/avatar.png"
              width="90px"
              height="90px"
              alt=""
            />
          </div>
          <div className="userInfo">
            <div>
              <p>Name : {this.state.name}</p>
              <br />
              <p>Email : {this.state.email}</p>
            </div>

            <button onClick={this.deleteAction} className="userDeleteBtn">
              Supprimer compte
            </button>
          </div>
        </div>
        <UserDeleteMsgBox />
      </div>
    );
  }
}
