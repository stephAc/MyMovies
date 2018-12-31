import React from 'react';
import AppLogo from '../../components/AppLogo';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Header.css';
import BtnHamburger from '../../components/BtnHamburger/BtnHamburger';

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
