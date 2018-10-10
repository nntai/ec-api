import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productDetailContainer state domain
 */

const selectProductDetailContainerDomain = state =>
  state.get('productDetailContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductDetailContainer
 */

const makeSelectProductDetailContainer = () =>
  createSelector(selectProductDetailContainerDomain, substate =>
    substate.toJS(),
  );

export default makeSelectProductDetailContainer;
export { selectProductDetailContainerDomain };
