import React, { Component } from "react";

import { DocumentOutlineSection, H } from "react-document-section";

import RandomNestedComponent from "./RandomNestedComponent";

const rndInt = limit => (Math.random() * limit) | 0;
const randomColor = () => `rgb(${rndInt(255)}, ${rndInt(255)}, ${rndInt(255)})`;

export default class App extends Component {
  render = () => (
    <div>
      <DocumentOutlineSection title="Example Page">
        <H />
        <p>
          This is a sample page showcasing the{" "}
          <code>DocumentOutlineSection</code> and <code>H</code> components in
          action.
        </p>
        <RandomNestedComponent title="This works across sub components">
          <RandomNestedComponent title="And sub sub components" />
        </RandomNestedComponent>
        <DocumentOutlineSection title="You can also style the <H> component">
          <H style={{ color: randomColor() }} />
          <p>Or pass other random attributes to it</p>
        </DocumentOutlineSection>
        <DocumentOutlineSection title={<span>If you feel like it you can even pass JSX down the line</span>}>
          <H />
        </DocumentOutlineSection>
      </DocumentOutlineSection>
    </div>
  );
}
