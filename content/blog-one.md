---
slug: blog-one
title: This is the first Blog of John Doe on his site
author: John Doe
---

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like

```js
const {
  es5Paths,
  esNextPaths,
} = require('./scripts/shared/pathsByLanguageVersion')

const restrictedGlobals = require('confusing-browser-globals')

const OFF = 0
const ERROR = 2

module.exports = {
  extends: ['fbjs', 'prettier'],

  // Stop ESLint from looking for a configuration file in parent folders
  root: true,

  plugins: [
    'jest',
    'no-for-of-loops',
    'no-function-declare-after-return',
    'react',
    'react-internal',
  ],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'script',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  }
}
```

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
