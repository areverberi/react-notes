'use strict';
import * as actionTypes from '../actions/actionTypes';

export const historyReducer= (state=[], action) => {
  switch(action) {
    case actionTypes.NOTE_HISTORY_FETCH_SUCCESS:
      return action.history;
    default:
      return state;
  }
};
