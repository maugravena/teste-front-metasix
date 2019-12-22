import React from 'react';
import styled from 'styled-components';
import HeaderFAQ from '../HeaderFAQ';

const Wrapper = styled.section`
  flex-direction: column;
  display: flex;
`;

function QuestionsBoaVista() {
  return (
    <Wrapper>
      <HeaderFAQ />
    </Wrapper>
  );
}

export default QuestionsBoaVista;
