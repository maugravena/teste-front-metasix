import styled from 'styled-components';

const BtnStart = styled.button.attrs(props => ({ children: props.content }))`
  background-color: #fff;
  border-radius: 25px;
  color: #303030;
  font-size: 20px;
  height: 50px;
  text-transform: uppercase;
  width: 280px;
`;

export default BtnStart;
