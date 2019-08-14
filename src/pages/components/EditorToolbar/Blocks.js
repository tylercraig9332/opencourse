'use strict'
import React, { Component } from 'react'
import './toolbar.css'
import Tippy from '@tippy.js/react'

import { RichUtils} from 'draft-js'

export default class Blocks extends Component {

  _toggleBlockType(event) {

    const eState = RichUtils.toggleBlockType(
      this.props.getEditorState(),
        event.currentTarget.id
      )
    this.props.setEditorState(eState)
  }

  render() {
    return (
      <span>
        <Tippy content={<div>Heading 1</div>} arrow={true}>
          <button id="header-one" className="toolbar" onClick={this._toggleBlockType.bind(this)}><strong>H1</strong></button>
        </Tippy>
        <Tippy content={<div>Heading 2</div>} arrow={true}>
          <button id="header-two" className="toolbar" onClick={this._toggleBlockType.bind(this)}><strong>H2</strong></button>
        </Tippy>
        <Tippy content={<div>Heading 3</div>} arrow={true}>
          <button id="header-three"className="toolbar" onClick={this._toggleBlockType.bind(this)}><strong>H3</strong></button>
        </Tippy>
        <Tippy content={<div>Bullet List</div>} arrow={true}>
          <button id="unordered-list-item" className="toolbar" onClick={this._toggleBlockType.bind(this)}><i className="fas fa-list-ul"></i></button>
        </Tippy>
        <Tippy content={<div>Number List</div>} arrow={true}>
          <button id="ordered-list-item" className="toolbar" onClick={this._toggleBlockType.bind(this)}><i className="fas fa-list-ol"></i></button>
        </Tippy>
      </span>
    )
  }
}