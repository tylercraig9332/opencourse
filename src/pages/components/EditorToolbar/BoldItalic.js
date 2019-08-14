'use strict'
import React, { Component } from 'react'
import './toolbar.css'
import Tippy from '@tippy.js/react'

import { RichUtils} from 'draft-js'

export default class BoldItalic extends Component {

  _toggleInlineStyle(event) {
    const eState = RichUtils.toggleInlineStyle(
        this.props.getEditorState(),
        event.currentTarget.id
    )
    this.props.setEditorState(eState)
  }

  render() {
    return (
      <span>
        <Tippy content={<div>Bold</div>} arrow={true}>
          <button id="BOLD" className="toolbar" onClick={this._toggleInlineStyle.bind(this)}><i className="fas fa-bold"></i></button>
        </Tippy>
        <Tippy content={<div>Italic</div>} arrow={true}>
          <button id="ITALIC" className="toolbar" onClick={this._toggleInlineStyle.bind(this)}><i className="fas fa-italic"></i></button>
        </Tippy>
        <Tippy content={<div>Underline</div>} arrow={true}>
          <button id="UNDERLINE" className="toolbar" onClick={this._toggleInlineStyle.bind(this)}><i className="fas fa-underline"></i></button>
        </Tippy>
      </span>
    )
  }
}