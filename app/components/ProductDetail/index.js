/**
 *
 * ProductDetail
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Image, H2, H3, H4, Button } from 'components/Components';

import messages from './messages';
import {
  Wrapper,
  ProductSampleWrapper,
  PrimarySample,
  OtherSamples,
  ProductInfoWrapper,
  ActionWrapper,
} from './wrapper.styled';
import sample from '../../images/sample.jpg';

/* eslint-disable react/prefer-stateless-function */
class ProductDetail extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <ProductSampleWrapper>
          <PrimarySample>
            <Image src={sample} height="250px" />
          </PrimarySample>
          <OtherSamples>This is other samples</OtherSamples>
        </ProductSampleWrapper>
        <ProductInfoWrapper>
          <H2>Product Name</H2>
          <H3>Description</H3>
          <FormattedMessage {...messages.testDescription} />
          <H4>$1500</H4>
          <ActionWrapper>
            <Button>Add To Card</Button>
            <Button>Buy Now</Button>
          </ActionWrapper>
        </ProductInfoWrapper>
      </Wrapper>
    );
  }
}

ProductDetail.propTypes = {};

export default ProductDetail;
