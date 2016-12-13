// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {notesReducer, noteReducer} from './notesReducers';
 import {historyReducer} from './historyReducer';

 export default combineReducers({
   notes : notesReducer,
   history : historyReducer,
   note: noteReducer,
 });
