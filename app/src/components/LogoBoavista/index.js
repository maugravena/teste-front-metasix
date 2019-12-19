import styled from 'styled-components';
import logo from '../../img/logo.png';

const LogoBoavista = styled.img.attrs({ src: logo, alt: 'Logo Boa Vista' })`
  height: auto;
  max-width: ${props => (props.smaller ? '150px' : '100%')};
  object-fit: contain;
`;

export default LogoBoavista;
