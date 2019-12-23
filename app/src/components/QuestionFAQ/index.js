import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 0px 3px 0px rgb(219, 219, 219);
  display: flex;
  margin: 10px 0;
  padding: 6px 20px 6px 6px;

  & > span {
    margin-left: 32px;
  }

  @media (min-width: 768px) {
    padding: 6px 30px 6px 20px;

    & > span {
      margin-left: 85px;
    }
  }
`;

const Text = styled.p`
  color: #303030;
  font-size: 14px;
  margin-right: auto;
  max-width: 160px;

  @media (min-width: 768px) {
    margin-right: auto;
    max-width: 100%;
  }
`;

const Number = styled.span`
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

const EditIcon = styled.span``;

const DeleteIcon = styled.span``;

function QuestionFAQ({ question }) {
  return (
    <Wrapper>
      <Text>{question.name}</Text>
      <Number>{question.idade}</Number>
      <EditIcon>
        <FontAwesomeIcon icon={faEdit} color="#0168B4" />
      </EditIcon>
      <DeleteIcon>
        <FontAwesomeIcon icon={faTrash} color="#DC3545" />
      </DeleteIcon>
    </Wrapper>
  );
}

QuestionFAQ.defaultProps = {
  question: {}
};

QuestionFAQ.propTypes = {
  question: PropTypes.objectOf(PropTypes.object)
};

export default QuestionFAQ;
