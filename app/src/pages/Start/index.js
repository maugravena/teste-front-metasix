import React from 'react';
import { Link } from 'react-router-dom';
import StartWrapper from '../../components/StartWrapper';
import LogoBoavista from '../../components/LogoBoavista';
import BtnStart from '../../components/BtnStart';

function Start() {
  return (
    <StartWrapper>
      <LogoBoavista />
      <Link to="/dashboard">
        <BtnStart content="Entrar" />
      </Link>
    </StartWrapper>
  );
}

export default Start;
