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
import { Modal } from 'components/Components';

import ProductDetail from 'containers/ProductDetailContainer/Loadable';

// import messages from './messages';
import { Wrapper } from './wrapper.styled';

class ProductBoard extends React.PureComponent {
  openProductDetail = e => {
    e.preventDefault();
    this.modal.openModal();
  };

  render() {
    return (
      <Wrapper>
        <Modal
          label="Product Detail"
          ref={el => {
            this.modal = el;
          }}
          contentStyle={{ width: '500px' }}
        >
          <ProductDetail />
        </Modal>
        <ProductItem openDetail={this.openProductDetail} />
        <ProductItem openDetail={this.openProductDetail} />
        <ProductItem openDetail={this.openProductDetail} />
        <ProductItem openDetail={this.openProductDetail} />
      </Wrapper>
    );
  }
}

ProductBoard.propTypes = {};

export default ProductBoard;
