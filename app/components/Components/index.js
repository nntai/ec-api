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
