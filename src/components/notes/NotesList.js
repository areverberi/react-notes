'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as noteActions from '../../actions/noteActions';
import './noteStyles.css';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    return this.props.fetchNotes();
  }
  render() {
    return (
      <div className="row">
        {this.props.notes.map((n) => <Link to={'notes/'+n.id} key={n.id}><div key={n.id} className={'col-md-3 col-sm-6 well '+n.category} onClick={() => this.props.selectNote(n)}><h1>{n.title}</h1><p>{n.text}</p></div></Link>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes : state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes : () => {
      return dispatch(noteActions.fetchNotes());
    },
    selectNote : (n) => {
      return dispatch(noteActions.selectNote(n));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
