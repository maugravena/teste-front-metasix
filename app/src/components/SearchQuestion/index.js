import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  display: flex;
  height: 35px;
  margin-top: 20px;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Input = styled.input.attrs(() => ({
  placeholder: 'Busque por termo...'
}))`
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 2px -0px rgb(138, 138, 138);
  font-size: 14px;
  margin-right: 10px;
  padding: 8px;

  &::placeholder {
    font-style: italic;
  }

  @media (min-width: 1024px) {
    width: 280px;
  }
`;

const Button = styled.button`
  background-color: #0168b4;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.75);
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  width: 100px;

  & > svg {
    margin-right: 3px;

    @media (min-width: 1024px) {
      font-size: 16px;
      margin-right: 8px;
    }
  }
`;

function SearchQuestion() {
  return (
    <Wrapper>
      <Input />
      <Button>
        <FontAwesomeIcon icon={faSearch} color="white" />
        Buscar
      </Button>
    </Wrapper>
  );
}

export default SearchQuestion;
