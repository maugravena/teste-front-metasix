import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderQuestions from '../HeaderQuestions';
import QuestionFAQ from '../QuestionFAQ';
import Questions from '../../services/questions';

const Wrapper = styled.div`
  height: 350px;
  margin-top: 25px;
  overflow-y: scroll;
  padding: 0 1px;
`;

function ListQuestions() {
  // const [hasError, setErrors] = useState(false);
  const [questions, setQuestions] = useState([]);

  async function fetchData() {
    const res = await Questions.get();
    const { data } = res;
    const questionsObj = data.results;
    questionsObj.sort((a, b) => a.position - b.position);

    setQuestions(questionsObj);
  }

  useEffect(() => {
    fetchData();
  }, [setQuestions]);

  return (
    <Wrapper>
      <HeaderQuestions />
      {questions.map(question => (
        <QuestionFAQ key={question.position} question={question} />
      ))}
    </Wrapper>
  );
}

export default ListQuestions;
