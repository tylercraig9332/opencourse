'use strict'
import React, { Component } from 'react'

import './toolbar.css'

import UndoRedo from './UndoRedo'
import BoldItalic from './BoldItalic'
//import TextColor from './TextColor'
import Blocks from './Blocks'
//import Alignment from './Alignment'
//import Media from './Media'
//import Link from './Link'
import Separator from './Separator'

export default class Toolbar extends Component {
  render() {
    return (
      <div className="tool">
        <UndoRedo setEditorState={this.props.setEditorState} getEditorState={this.props.getEditorState} />
        <Separator />
        <BoldItalic setEditorState={this.props.setEditorState} getEditorState={this.props.getEditorState} />
        <Separator />
        <Blocks setEditorState={this.props.setEditorState} getEditorState={this.props.getEditorState}/>
      </div>
    )
  }
}