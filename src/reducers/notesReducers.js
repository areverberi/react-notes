'use strict';
import * as actionTypes from '../actions/actionTypes';

export const notesReducer = (state=[], action) => {
  switch (action.type) {
    case actionTypes.NOTES_FETCH_SUCCESS:
      return action.notes;
    default:
      return state;
  }
};
