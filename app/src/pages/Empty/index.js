import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
`;

const Text = styled.h3`
  color: #707070;
  font-size: 45px;
`;

function Empty() {
  return (
    <Wrapper>
      <Text>Em construção</Text>
    </Wrapper>
  );
}

export default Empty;
