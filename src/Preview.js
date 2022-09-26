import React, { Component } from 'react'
import { marked } from 'marked';

export default class Preview extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
      let html = marked.parse(this.props.markDown)
      return (
        <div id='preview'>
          <h2>2) Here's a preview of the markdown</h2>
        <div id='preview-text'  dangerouslySetInnerHTML={{__html: html}}>
        </div>
        </div>
      );
    }
  }