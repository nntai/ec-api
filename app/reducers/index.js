/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import languageProviderReducer from './language';
import routeReducer from './route';
import storeReducer from './store';
import persistReducer from './persist';
import productReducer from './products';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    store: storeReducer,
    persist: persistReducer,
    product: productReducer,
    ...injectedReducers,
  });
}

export const REHYDRATION_COMPLETE = 'rehydration/COMPLETE';
