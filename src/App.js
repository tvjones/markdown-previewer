import React, { Component } from "react";
import Editor from "./Editor";
import Preview from "./Preview";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { markDown: '# Markdown Previewer  \n## Demo \n[Github](https://github.com)'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markDown: event.target.value,
    });
  }
  render() {
    return (<div id="app">
      <h1>MarkDown Previewer</h1>
      <div id='work-area'>
      <Editor handleChange = {this.handleChange}/>
      <Preview markDown = {this.state.markDown}/>
      </div>
    </div>);
  }
}

