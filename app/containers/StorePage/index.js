/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import StorePage from '../../components/StorePage';
// import { makeSelectNumber, actions } from '../../reducers/store';
import { makeSelectNumberPersist, actions } from '../../reducers/persist';

export const StorePageContainer = props => <StorePage {...props} />;

StorePageContainer.propTypes = {};

const mapStateToProps = createSelector(makeSelectNumberPersist(), number => ({
  number,
}));

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    increaseNumber: () => dispatch(actions.increaseNumberPersist()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StorePageContainer);
