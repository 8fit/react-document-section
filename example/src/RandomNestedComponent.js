import React from "react";

import { DocumentOutlineSection, H } from "react-document-section";

const RandomNestedComponent = ({ title, children }) => (
  <DocumentOutlineSection title={title}>
    <H />
    {children}
  </DocumentOutlineSection>
);

export default RandomNestedComponent;
