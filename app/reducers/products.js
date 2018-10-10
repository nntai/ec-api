import { fromJS } from 'immutable';

// import action type
export const PRODUCT_ACTION_REQUEST_SINGLE = 'product/action/REQUEST_SINGLE';
export const PRODUCT_ACTION_REQUEST_SINGLE_SUCCESS =
  'product/action/REQUEST_SINGLE_SUCCESS';
export const PRODUCT_ACTION_REQUEST_SINGLE_FAIL =
  'product/action/REQUEST_SINGLE_FAIL';

export const PRODUCT_ACTION_REQUEST = 'product/action/REQUEST';
export const PRODUCT_ACTION_REQUEST_SUCCESS = 'product/action/REQUEST_SUCCESS';
export const PRODUCT_ACTION_REQUEST_FAIL = 'product/action/REQUEST_FAIL';

export const PRODUCT_ACTION_REQUEST_MORE = 'product/action/REQUEST_MORE';
export const PRODUCT_ACTION_REQUEST_MORE_SUCCESS =
  'product/action/REQUEST_MORE_SUCCESS';
export const PRODUCT_ACTION_REQUEST_MORE_FAIL =
  'product/action/REQUEST_MORE_FAIL';

// initialState
const initialState = fromJS({
  isLoading: false,
});

// reducer
function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_ACTION_REQUEST_SINGLE:
      return state.set('isLoading', true);
    default:
      return state;
  }
}

export default productReducer;
