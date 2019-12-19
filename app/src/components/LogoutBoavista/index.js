import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  color: #fff;
  font-weight: bold;
`;

function LogoutBoavista() {
  return (
    <Wrapper>
      <Link to="/">
        <FontAwesomeIcon icon={faSignOutAlt} color="white" size="lg" />
      </Link>
      <Text>Log Out</Text>
    </Wrapper>
  );
}

export default LogoutBoavista;
