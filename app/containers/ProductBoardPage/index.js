/**
 *
 * ProductBoardPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ProductBoard from 'components/ProductBoard/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductBoardPage from './selectors';
import reducer from './reducer';
import saga from './saga';

function ProductBoardPage() {
  return <ProductBoard />;
}

ProductBoardPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productboardpage: makeSelectProductBoardPage(),
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

const withReducer = injectReducer({ key: 'productboardpage', reducer });
const withSaga = injectSaga({ key: 'productboardpage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductBoardPage);
