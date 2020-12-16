import React, { Component } from "react";
import marked from "marked";

class Previewer extends Component {
  render() {
    return (
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(this.props.view)
        }}
      ></div>
    );
  }
}

export default Previewer;
