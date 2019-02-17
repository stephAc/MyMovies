import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../DataConfig';
import './FilmDescription.css';
import Log from '../Login/Log';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';
import Actors from '../Actors/Actors';
import MyContext from '../../contexts/context';

export default class FilmDescription extends Component {
  state = {
    id: this.props.match.params.idFilm,
    film: '',
    actors: '',
    idUser: '',
  };

  componentDidMount() {
    if (this.props.idUser) {
      this.setState(
        () => ({
          idUser: this.props.idUser,
        }),
        () => this.fetchUserFilm(),
      );
    }

    const requestFilm = `${API_URL}movie/${
      this.state.id
    }${API_KEY}&language=en-US`;
    const requestActors = `${API_URL}movie/${
      this.state.id
    }/credits?api_key=22232165bd2420fd47b1eb7520ab231c`;
    this.getRequestFilm(requestFilm);
    this.getRequestActors(requestActors);
  }

  getRequestFilm = requestFilm => {
    fetch(requestFilm)
      .then(result => result.json())
      .then(result => {
        this.setState({
          film: result,
        });
      });
  };

  fetchUserFilm = () => {
    let req = `http://localhost:4000/towatchuserfilm/${this.state.idUser}`;
    fetch(req, { mode: 'cors' })
      .then(result => result.json())
      .then(result => {
        this.checkUserList(result);
      })
      .catch(function(error) {
        console.log('Request failed', error);
      });
  };

  checkUserList = result => {
    const resultat = result.find(res => res === this.state.id);
    if (resultat) {
      document.getElementById('addFilm').style.display = 'none';
    }
  };

  getRequestActors = requestActors => {
    fetch(requestActors)
      .then(result => result.json())
      .then(result => {
        //console.log(result.cast);
        this.setState({
          actors: result.cast,
        });
      });
  };

  addFilm = idUser => {
    document.getElementById('addFilm').disabled = true;
    document.getElementById('addFilm').innerHTML = 'Ajouté !';
    document.getElementById('addFilm').style.backgroundColor = 'Lime';
    document.getElementById('addFilm').style.color = 'black';
    const info = { idUser: idUser, idFilm: this.state.id };
    fetch('http://localhost:4000/addfilm', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(info),
    });
  };

  render() {
    return (
      <div>
        <Log />
        <BtnSlideBar />
        <div className="container">
          <img
            className="poster"
            src={
              this.state.film.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                    this.state.film.poster_path
                  }`
                : '/pics/error.png'
            }
            alt=""
            width="400px"
          />
          <div className="childContainer">
            <p className="filmTitle">{this.state.film.title}</p>
            <span>Note : </span>
            <div className="noteStyle">
              {this.state.film.vote_average}
              /10
            </div>
            <br />
            <p>Date : {this.state.film.release_date}</p>
            <br />
            <p>{this.state.film.overview}</p>
            <MyContext.Consumer>
              {context => (
                <React.Fragment>
                  {context.state.log ? (
                    <button
                      id="addFilm"
                      className="btnAddFilm"
                      onClick={() => this.addFilm(context.state.idUser)}
                    >
                      To Watch +
                    </button>
                  ) : (
                    ''
                  )}
                </React.Fragment>
              )}
            </MyContext.Consumer>
          </div>
        </div>
        {!!this.state.actors.length ? (
          <div className="gridActor">
            {this.state.actors.map(function(item, key) {
              return (
                <div key={key}>
                  <Actors actor={item} />
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <p>Actor not find</p>
          </div>
        )}
      </div>
    );
  }
}
