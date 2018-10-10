import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #0e4075;
  display: flex;
  background-color: white;
  height: 60px;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

export const Section = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${props => props.maxWidth || 'unset'};
`;

export const Nav = styled.div``;
