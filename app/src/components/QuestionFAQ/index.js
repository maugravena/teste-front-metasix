import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 3px 0px rgb(219, 219, 219);
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 6px 20px 6px 6px;

  & > span {
    margin-left: 32px;
  }

  @media (min-width: 564px) {
    padding: 10px 30px 10px 20px;

    & > span {
      margin-left: 75px;
    }
  }
`;

const Text = styled.p`
  color: #303030;
  font-size: 14px;
  margin-right: auto;
  max-width: 160px;

  @media (min-width: 564px) {
    font-size: 16px;
    margin-right: auto;
    max-width: 100%;
  }
`;

const Number = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

const EditIcon = styled.span`
  @media (min-width: 564px) {
    font-size: 22px;
  }
`;

const DeleteIcon = styled.span`
  @media (min-width: 564px) {
    font-size: 22px;
  }
`;

function QuestionFAQ({ question }) {
  return (
    <Wrapper>
      <Text>{question.question}</Text>
      <Number>{question.position + 1}</Number>
      <EditIcon>
        <FontAwesomeIcon icon={faEdit} color="#0168B4" />
      </EditIcon>
      <DeleteIcon>
        <FontAwesomeIcon icon={faTrash} color="#DC3545" />
      </DeleteIcon>
    </Wrapper>
  );
}

QuestionFAQ.propTypes = {
  question: PropTypes.objectOf(PropTypes.any).isRequired
};

export default QuestionFAQ;
