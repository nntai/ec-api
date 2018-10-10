/**
 *
 * MainLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Header from 'components/Header/Loadable';
import Footer from 'components/Footer/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMainLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { Wrapper, ContentWrapper } from './sublayout.styled';

function MainLayout({ children }) {
  return (
    <Wrapper>
      <Helmet>
        <title>MainLayout</title>
        <meta name="description" content="Description of MainLayout" />
      </Helmet>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
}

MainLayout.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  children: PropTypes.node,
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
