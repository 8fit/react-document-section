# react-document-section

> Modular creation of the document outline by automating heading level assignment with React components

[![NPM](https://img.shields.io/npm/v/react-document-section.svg)](https://www.npmjs.com/package/react-document-section) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Problem

In modern web development we build pages modularly by using components. However, the way the document outline is implemented in relevant browsers contradicts this modular approach because structure is specified by using various heading ranks (`h1` - `h6`). Therefore the heading level isn't contextual which means that in any given subcomponent you need to know where in the page that component is used in order to know which heading level to specify.

## Solution

`react-document-section` provides two components:

* `DocumentOutlineSection` is the component with which you specify the nesting level. Wrap everything that should be part of a section in this component.
  * `title` (String) Specify the title of the section as a property of `DocumentOutlineSection`. Be aware however that you need an `H` component to display this title.
* `H` is the component which displays the title specified in `DocumentOutlineSection`. It's a universal alternative to `h1` - `h6`. Any properties you set in this component are set as attributes of the actual `h1` – `h6` element.

## Install

With NPM

```bash
npm install --save react-document-section
```

Or yarn

```bash
yarn add react-document-section
```

## Usage

```jsx
import React from 'react'

import { DocumentOutlineSection, H } from 'react-document-section'

const ExampleComponent = () => (
  <DocumentOutlineSection title="The Main Title">
    <H className="my-title-class" />
    <DocumentOutlineSection title="A subsection within the document">
      <H />
      <p>Some text</p>
    </DocumentOutlineSection>
    <DocumentOutlineSection title="Another subsection">
      <H />
      <DocumentOutlineSection title="A subsection of the subsection">
        <H />
        <p>Even more text</p>
      </DocumentOutlineSection>
    </DocumentOutlineSection>
  </DocumentOutlineSection>
)
```

Would result in this render output:

```html
<h1 class="my-title-class">The Main Title</h1>
<h2>A subsection within the document</h2>
<p>Some text</p>
<h2>Another subsection</h2>
<h3>A subsection of the subsection</h3>
<p>Even more text</p>
```

You can nest the `DocumentOutlineSection` in arbitrary depth.
