import { combineReducers } from 'redux';

import { ActionsTypes as CounterActionTypes } from '../actions/CounterActions';

const result = (state = 0, action) => {
  switch (action.type) {
    case CounterActionTypes.ADD:
      return state + 1;
    case CounterActionTypes.SUBTRACT:
      return state - 1;
    default:
      return state;
  }
};

const lastCommand = (state = '', action) => {
  switch (action.type) {
    case CounterActionTypes.ADD:
      return 'added'
    case CounterActionTypes.SUBTRACT:
      return 'subtracted';
    default:
      return state;
  }
};

export default combineReducers({
  result,
  lastCommand,
});