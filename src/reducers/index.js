// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {notesReducer} from './notesReducers';

 export default combineReducers({
   notes : notesReducer,
 });
