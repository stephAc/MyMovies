import React from 'react';
import AppLogo from '../components/AppLogo';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const style = {
  textAlign: 'center',
  backgroundColor: 'black',
  color: 'white',
  height: '80px',
  display: 'flex',
  paddingLeft: '15px',
  paddingRight: '15px',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 'bold',
};

export default () => (
  <div style={style}>
    <AppLogo />
    <SearchBar />
    <Link to={`/connexion`}>Connexion</Link>
    <button onClick={handleConnexion}>Connexion</button>
  </div>
);

function handleConnexion() {
  var popLog = document.getElementById('logForm');

  popLog.style.display =
    popLog.style.display === 'none' || popLog.style.display === ''
      ? 'block'
      : 'none';
}
