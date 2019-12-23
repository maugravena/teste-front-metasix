import React from 'react';
import styled from 'styled-components';
import HeaderFAQ from '../../components/HeaderFAQ';
import ListQuestions from '../../components/ListQuestions';

const Wrapper = styled.section``;

function FAQ() {
  return (
    <Wrapper>
      <HeaderFAQ />
      <ListQuestions />
    </Wrapper>
  );
}

export default FAQ;
