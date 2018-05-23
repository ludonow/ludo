import styled from 'styled-components';

export const NormalAnchor = styled.a`
  text-decoration: none;
`;

export const StyledAnchor = styled.a`
  color: ${props => props.color ? props.color : 'white'};
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Helvetica'};
  text-decoration: none;
`;
