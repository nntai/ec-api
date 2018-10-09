import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

import { DEFAULT_LOCALE } from '../i18n'; // eslint-disable-line

export const INCREASE_NUMBER = 'app/STORE/INCREASE_NUMBER';

// initialState
export const initialState = fromJS({
  number: 0,
});

// actionCreator
function increaseNumber() {
  return {
    type: INCREASE_NUMBER,
  };
}

export const actions = {
  increaseNumber,
};

// selectors
const selectLanguage = state => state.get('store', initialState);
export const makeSelectNumber = () =>
  createSelector(selectLanguage, languageState => languageState.get('number'));

// reducers
function storeReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_NUMBER:
      return state.set('number', state.get('number') + 1);
    default:
      return state;
  }
}

export default storeReducer;
