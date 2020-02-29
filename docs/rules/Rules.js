import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import styles from "./styles.module.css";

export default class Rules extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.rules = props.rules;
  }

  render() {
    return (
      <ol>
        {this.rules.map(rule => (
          <li key={rule.key}>
            <a href={"#" + rule.key} name={rule.key}>
              <b>{rule.name}</b>
            </a>{" "}
            <img
              alt={rule.severity}
              src={
                "/img/severity/severity-" + rule.severity.toLowerCase() + ".svg"
              }
            />
            <small>{rule.severity}</small>
            {rule.template ? (
              <>
                {" "}
                <span className="badge badge--secondary">template</span>
              </>
            ) : (
              ""
            )}
            <ReactMarkdown
              source={rule.description}
              renderers={{ code: CodeBlock }}
            />
            <div>
              <small>
                <i>{rule.key}</i>
              </small>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}
