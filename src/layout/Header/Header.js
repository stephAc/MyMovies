import React from 'react';
import AppLogo from '../../components/AppLogo';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Header.css';
import BtnHamburger from '../../components/BtnHamburger/BtnHamburger';
import { IoMdContact, IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import MyContext from '../../contexts/context';

export default () => (
  <nav className="headerStyle flexContainer">
    <AppLogo />
    <SearchBar />
    <ul className="flexContainer">
      <li>
        <button className="btnStyle" onClick={handleConnexion}>
          Connexion
        </button>
      </li>
      <li>
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              {context.state.log ? (
                <p style={{ color: 'white' }}>{context.state.name}</p>
              ) : (
                <p style={{ color: 'white' }}>name</p>
              )}

              <button onClick={() => context.logIn(true)}>logIn</button>
              <button onClick={() => context.logOut(false)}>logOut</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </li>
      <li>
        <Link to={`/film/search`}>
          <IoIosSearch className="iconAvatar" />
        </Link>
      </li>
      <li>
        <Link to={`/login`}>
          <IoMdContact className="iconAvatar" />
        </Link>
      </li>
      <li>
        <BtnHamburger />
      </li>
    </ul>
  </nav>
);

function handleConnexion() {
  var popLog = document.getElementById('logForm');

  if (document.location.href !== 'http://localhost:3000/film/login') {
    popLog.style.display =
      popLog.style.display === 'none' || popLog.style.display === ''
        ? 'block'
        : 'none';
  }
}
