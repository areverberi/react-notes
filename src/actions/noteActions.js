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

export const fetchNoteHistorySuccess = (history) => {
  return {
    type: actionTypes.NOTE_HISTORY_FETCH_SUCCESS,
    history: history,
  };
};

export const fetchNoteHistory = (id) => {
  return (dispatch) => {
    return Axios.get(notesEndpoint+'/'+id)
      .then(response => {
        return dispatch(fetchNoteHistorySuccess(response.data.history));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const selectNote = (n) => {
  return {
    type : actionTypes.NOTE_SELECTED,
    note: n,
  };
};


export const fetchNoteSuccess = (note) => {
  return {
    type: actionTypes.NOTE_FETCH_SUCCESS,
    note: note,
  };
};

export const fetchNote = (id) => {
  return (dispatch) => {
    return Axios.get(notesEndpoint+'/'+id)
      .then(response => {
        return dispatch(fetchNoteSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
