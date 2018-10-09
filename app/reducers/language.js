import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

import { DEFAULT_LOCALE } from '../../i18n'; // eslint-disable-line

export const CHANGE_LOCALE = 'app/LanguageToggle/CHANGE_LOCALE';

// initialState
export const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

// actionCreator
function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}

export const actions = {
  changeLocale,
};

// selectors
const selectLanguage = state => state.get('language', initialState);
export const makeSelectLocale = () =>
  createSelector(selectLanguage, languageState => languageState.get('locale'));

// reducers
function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state.set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;
