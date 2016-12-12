'use strict';
import Axios from 'axios';
import * as actionTypes from './actionTypes';

const notesEndpoint = 'http://584dd01c7ba93b12001db536.mockapi.io/note';

export const fetchNotesSuccess = (notes) => {
  return {
    type : actionTypes.NOTES_FETCH_SUCCESS,
    notes : notes,
  };
};

export const fetchNotes = () => {
  return (dispatch) => {
    return Axios.get(notesEndpoint)
      .then(response => {
        return dispatch(fetchNotesSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
