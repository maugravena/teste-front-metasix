import React from 'react';
import styled from 'styled-components';
import SearchQuestion from '../SearchQuestion';

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  color: #303030;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

function HeaderFAQ() {
  return (
    <Wrapper>
      <Title>FAQ - Perguntas Frequentes</Title>
      <SearchQuestion />
    </Wrapper>
  );
}

export default HeaderFAQ;
