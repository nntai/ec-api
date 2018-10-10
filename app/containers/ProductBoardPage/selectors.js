import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productBoardPage state domain
 */

const selectProductBoardPageDomain = state =>
  state.get('productBoardPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductBoardPage
 */

const makeSelectProductBoardPage = () =>
  createSelector(selectProductBoardPageDomain, substate => substate.toJS());

export default makeSelectProductBoardPage;
export { selectProductBoardPageDomain };
