'use strict';

import React from 'react';
import {connect} from 'react-redux';
import '../noteStyles.css';

import * as noteActions from '../../../actions/noteActions';
class Note extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if(this.props.note && Object.keys(this.props.note).length) {
      this.props.fetchNoteHistory();
    } else {
      this.props.fetchNote();
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className={'col-md-12 well '+this.props.note.category}>
            <h1>{this.props.note.title}</h1>
            <p>{this.props.note.text}</p>
          </div>
        </div>
        <div className="row">
          <ul>
            {this.props.history.map((h, i) => <li key={i}>Modificato il: {h.modDate}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
    note: state.note,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNoteHistory :() => {dispatch(noteActions.fetchNoteHistory(ownProps.params.id));},
    fetchNote: () => {dispatch(noteActions.fetchNote(ownProps.params.id));},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
