'use strict'
import React, { Component } from 'react'
import './toolbar.css'
import Tippy from '@tippy.js/react'

import { EditorState } from 'draft-js'

export default class UndoRedo extends Component {
  constructor(props) {
    super(props)
  }

  _undo() {
    this.props.setEditorState(EditorState.undo(this.props.getEditorState()))
  }

  _redo() {
    this.props.setEditorState(EditorState.redo(this.props.getEditorState()))
  }

  render() {
    return (
      <span>
        <Tippy content={<div>Undo</div>} arrow={true}>
          <button className="toolbar" onClick={this._undo.bind(this)}><i className="fas fa-undo"></i></button>
        </Tippy>
        <Tippy content={<div>Redo</div>} arrow={true}>
          <button className="toolbar" onClick={this._redo.bind(this)}><i className="fas fa-redo"></i></button>
        </Tippy>
      </span>
    )
  }
}
