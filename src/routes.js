'use strict';
// ./src/routes.js
import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/HomePage';
import Notes from './components/notes/NotesList';
import Note from './components/notes/note/NoteDetail';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/notes" component={Notes}></Route>
    <Route path="/notes/:id" component={Note}></Route>
  </Route>
);
