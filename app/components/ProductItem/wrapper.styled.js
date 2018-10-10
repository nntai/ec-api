import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: block;
  width: 200px;
  margin: 4px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

export const ProductImg = styled.img`
  color: #0e4075;
  width: 100%;
  max-height: 120px;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  color: #0e4075;
`;

export const TextInfo = styled.div`
  color: #0e4075;
  padding: 1.25rem;
`;

export const ActionInfo = styled.div`
  color: #0e4075;
`;
