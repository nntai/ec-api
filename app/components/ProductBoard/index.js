/**
 *
 * ProductBoard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
import ProductItem from 'components/ProductItem/Loadable';

// import messages from './messages';
import { Wrapper } from './wrapper.styled';

function ProductBoard() {
  return (
    <Wrapper>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Wrapper>
  );
}

ProductBoard.propTypes = {};

export default ProductBoard;
