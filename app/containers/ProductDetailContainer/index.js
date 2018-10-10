/**
 *
 * ProductDetailContainer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import ProductDetail from 'components/ProductDetail/Loadable';

import makeSelectProductDetailContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

function ProductDetailContainer() {
  return <ProductDetail />;
}

ProductDetailContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productdetailcontainer: makeSelectProductDetailContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'productdetailcontainer', reducer });
const withSaga = injectSaga({ key: 'productdetailcontainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductDetailContainer);
