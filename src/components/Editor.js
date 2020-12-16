import React, { Component } from "react";

class Editor extends Component {
  render() {
    return (
      <div>
        <textarea
          id="editor"
          value={this.props.markdown}
          type="text"
          onChange={this.props.change}
        />
      </div>
    );
  }
}

export default Editor;
