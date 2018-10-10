/**
 *
 * ProductItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from 'components/Components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {
  Wrapper,
  ProductImg,
  ProductInfo,
  TextInfo,
  ActionInfo,
} from './wrapper.styled';

import sample from '../../images/sample.jpg';

function ProductItem({ openDetail }) {
  return (
    <Wrapper onClick={openDetail}>
      <ProductImg src={sample} />
      <ProductInfo>
        <TextInfo>
          <div>Product 1</div>
          <div>Product info</div>
          <div>Product price</div>
        </TextInfo>
        <ActionInfo>
          <Button fitBottom>
            <FormattedMessage {...messages.addToCard} />
          </Button>
        </ActionInfo>
      </ProductInfo>
    </Wrapper>
  );
}

ProductItem.propTypes = {
  openDetail: PropTypes.func.isRequired,
};

export default ProductItem;
