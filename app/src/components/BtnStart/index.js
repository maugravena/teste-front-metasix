import styled from 'styled-components';

const BtnStart = styled.button.attrs(props => ({ children: props.content }))`
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 0px 7px 0px rgba(50, 50, 50, 0.75);
  color: #303030;
  font-size: 20px;
  height: 50px;
  text-transform: uppercase;
  width: 280px;
`;

export default BtnStart;
