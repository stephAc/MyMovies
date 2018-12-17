import React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../assets/logos/app_logo.bmp';

export default () => (
  <React.Fragment>
    <Link to={`/`}>
      <img src={AppLogo} alt="app_logo" height="40" width="52" />
    </Link>
  </React.Fragment>
);
