import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  background-color: #0168b4;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgb(123, 123, 123);
  display: flex;
  padding: 6px 4px;

  @media (min-width: 768px) {
    padding: 6px 20px;
  }
`;

const Title = styled.p.attrs(props => ({ children: props.content }))`
  color: #fff;
  font-size: 12px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 14px;

    &:not(:first-child) {
      margin-left: 55px;
    }
  }
`;

const NewQuestion = styled.span`
  @media (min-width: 768px) {
    margin-left: auto;
  }

  & > ${Title} {
    display: inline-block;
    margin-left: 0;
  }

  & > svg {
    margin-right: 2px;

    @media (min-width: 768px) {
      font-size: 18px;
      margin-right: 10px;
    }
  }
`;

function HeaderQuestions() {
  return (
    <Wrapper>
      <Title content="Pergunta" />
      <NewQuestion>
        <FontAwesomeIcon icon={faPlusCircle} color="white" size="sm" />
        <Title content="Nova Pergunta" />
      </NewQuestion>
      <Title content="Ordem" />
      <Title content="Editar" />
      <Title content="Excluir" />
    </Wrapper>
  );
}

export default HeaderQuestions;
