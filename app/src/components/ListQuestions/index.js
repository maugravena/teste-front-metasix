import React from 'react';
import styled from 'styled-components';
import HeaderQuestions from '../HeaderQuestions';
import QuestionFAQ from '../QuestionFAQ';

const Wrapper = styled.div`
  height: 350px;
  margin-top: 25px;
  overflow-y: scroll;
  padding: 0 1px;
`;

function ListQuestions() {
  const question = { name: 'mauricio', idade: 28 };
  return (
    <Wrapper>
      <HeaderQuestions />
      <QuestionFAQ question={question} />
    </Wrapper>
  );
}

export default ListQuestions;
