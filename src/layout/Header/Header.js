import React from 'react';
import AppLogo from '../../components/AppLogo';
import SearchBar from '../../components/SearchBar/SearchBar';
// import { Link } from 'react-router-dom';
import './Header.css';

export default () => (
  <div className="headerStyle flexContainer">
    <AppLogo />
    <SearchBar />
    {/* <Link to={`/connexion`}>Connexion</Link> example link*/}
    <button className="btnStyle" onClick={handleConnexion}>
      Connexion
    </button>
  </div>
);

function handleConnexion() {
  var popLog = document.getElementById('logForm');

  popLog.style.display =
    popLog.style.display === 'none' || popLog.style.display === ''
      ? 'block'
      : 'none';
}
