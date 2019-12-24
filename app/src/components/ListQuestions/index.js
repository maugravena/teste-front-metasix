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
  const [hasError, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  async function fetchData() {
    try {
      const res = await Questions.get();
      const { data } = res;
      const questionsObj = await data.results;

      questionsObj.sort((a, b) => a.position - b.position);
      setQuestions(questionsObj);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, [setQuestions]);

  return (
    <Wrapper>
      <HeaderQuestions />
      {hasError && <div>Não foi possível carregar os dados</div>}
      {questions.map(question => (
        <QuestionFAQ key={question.objectId} question={question} />
      ))}
    </Wrapper>
  );
}

export default ListQuestions;
