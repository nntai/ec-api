import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default routeReducer;
