import React, { Component } from 'react'

export default class Editor extends Component {
    constructor(props){
      super(props)
    }
  
    render() {
      return (
        <div id='editor'>
          <h2>1) Enter Markdown in text area below</h2>
          <textarea rows={30} cols = {60} onChange = {this.props.handleChange}>{ '# Markdown Previewer  \n## Demo \n[Github](https://github.com)'}</textarea>
        </div>
      )
    }
  }

  
  
 