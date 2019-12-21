import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 30px;
`;

const Title = styled.h2`
  color: #303030;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

function QuestionsBoaVista() {
  return (
    <Wrapper>
      <Title>FAQ - Perguntas Frequentes</Title>
    </Wrapper>
  );
}

export default QuestionsBoaVista;
