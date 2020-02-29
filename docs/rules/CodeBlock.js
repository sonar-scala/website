import React, { PureComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/esm/styles/prism/ghcolors";

class CodeBlock extends PureComponent {
  constructor(props) {
    super();
    this.props = props;
    this.style = {
      fontFamily: "var(--ifm-font-family-base)",
      backgroundColor: "var(--ifm-pre-background)",
      border: 0
    };
  }

  render() {
    return (
      <SyntaxHighlighter
        language={this.props.language}
        style={theme}
        customStyle={this.style}
        codeTagProps={this.style}
      >
        {this.props.value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
