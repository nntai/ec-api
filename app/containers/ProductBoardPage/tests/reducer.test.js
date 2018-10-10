import { fromJS } from 'immutable';
import productBoardPageReducer from '../reducer';

describe('productBoardPageReducer', () => {
  it('returns the initial state', () => {
    expect(productBoardPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
