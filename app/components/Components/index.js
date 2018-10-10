import styled, { css } from 'styled-components';

/* load components */
export { default as Modal } from './modal';

export const Button = styled.button`
  background-color: #3273dc;
  border-color: transparent;
  color: #fff;
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: calc(0.375em - 1px);
  text-align: center;
  white-space: nowrap;

  ${props =>
    props.fitBottom &&
    css`
      width: 100%;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      min-height: 36px;
    `};
  &:hover {
    background-color: #2b63bc;
  }
`;

export const Image = styled.img`
  color: #0e4075;
  width: 100%;
  height: ${props => props.height || 'unset'};
  object-fit: contain;
`;

export const H1 = styled.h1`
  margin-top: unset;
`;

export const H2 = styled.h2`
  margin-top: unset;
`;

export const H3 = styled.h3`
  margin-top: unset;
`;

export const H4 = styled.h4`
  margin-top: unset;
`;
