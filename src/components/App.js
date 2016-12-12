'use strict';
// ./src/components/App.js
import React  from 'react';
import {Link} from 'react-router';
import './App.css';

const App = (props) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Notes</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <span>lateral menu</span>
          </div>
          <div className="col-sm-10">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
