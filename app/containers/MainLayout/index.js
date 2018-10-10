/**
 *
 * MainLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMainLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

function MainLayout() {
  return (
    <div>
      <Helmet>
        <title>MainLayout</title>
        <meta name="description" content="Description of MainLayout" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MainLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainlayout: makeSelectMainLayout(),
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

const withReducer = injectReducer({ key: 'mainlayout', reducer });
const withSaga = injectSaga({ key: 'mainlayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainLayout);
