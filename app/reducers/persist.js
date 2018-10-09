import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { DEFAULT_LOCALE } from '../i18n'; // eslint-disable-line

export const INCREASE_NUMBER_PERSIST = 'app/PERSIST/INCREASE_NUMBER_PERSIST';

// initialState
export const initialState = fromJS({
  number: 0,
});

// actionCreator
function increaseNumberPersist() {
  return {
    type: INCREASE_NUMBER_PERSIST,
  };
}

export const actions = {
  increaseNumberPersist,
};

// selectors
const selectPersist = state => state.get('persist', initialState);

export const makeSelectNumberPersist = () =>
  createSelector(selectPersist, state => state.get('number'));

// reducers
function persistSampleReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_NUMBER_PERSIST:
      return state.set('number', state.get('number') + 1);
    default:
      return state;
  }
}
export default persistSampleReducer;
