import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

function ModulesBoatista() {
  return (
    <Wrapper>
      <Link to="/">
        <FontAwesomeIcon icon={faTh} color="white" size="lg" />
      </Link>
      <Text>Módulos</Text>
    </Wrapper>
  );
}

export default ModulesBoatista;
