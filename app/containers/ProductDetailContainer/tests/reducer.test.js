import { fromJS } from 'immutable';
import productDetailContainerReducer from '../reducer';

describe('productDetailContainerReducer', () => {
  it('returns the initial state', () => {
    expect(productDetailContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
