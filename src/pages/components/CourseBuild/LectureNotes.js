import React from 'react'
import {Editor, EditorState, ContentState } from 'draft-js'
import Toolbar from '../EditorToolbar/Toolbar';

export default class LectureNotes extends React.Component {
  constructor() {
    super()
    this.state = {
      editorState: EditorState.createEmpty()
    }

    this.onEditChange = (eState) => this.setState({editorState: eState})
  }

  componentDidMount() {
    this.onEditChange(EditorState.moveFocusToEnd(this.state.editorState))
  }

  render() {
    return (
      <div>
        <div style={toolWrap}>
          <Toolbar setEditorState={this.onEditChange} getEditorState={() => this.state.editorState} />
        </div>
        <div style={wrap}>
          <Editor 
            editorState={this.state.editorState}
            onChange={this.onEditChange}
          />
        </div>
      </div>
    )
  }
}

const wrap = {
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 5,
  border: 'solid 1px',
  borderRadius: 5,
  minHeight: 300,
}

const toolWrap = {
  margin: 10,
  padding: 10
}