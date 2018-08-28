# react-control-flow-components

Control flow components for React to make writing JSX more natural.

[![Build Status](https://travis-ci.org/samuelneff/react-control-flow.svg?branch=master)](https://travis-ci.org/samuelneff/react-control-flow)

```jsx
import React from 'react';
import { Case, ForEach, If, Switch } from 'react-control-flow-components';

<If test={ condition }>
    <span>Only if true</span>
</If>

<Switch test={ condition }>
    <Case value="first">
        <span>If condition matches 'first'</span>
    </Case>
    <Case value="second">
        <span>If condition matches 'second'</span>
    </Case>
</Switch>

<ForEach items={ data }
         component={ DataView } />
```

# Installation

Install with npm or yarn

```bash
npm install --save react-control-flow-components
```

# Documentation

## `<If />`

```jsx
<If test={ condition }>
    <span>Only if true</span>
</If>
```

Prop | Type | Notes
---- | ---- | -----
`test` | Boolean | The expression to evaluate. Contents are rendered if the expression evaluates to truthy.

Note that children are evaluated by React before being passed to `<If />` so if a variable within the test may be null or undefined, you'l need to check that before accessing the variable in a way that would generate an error.

## `<Switch />`


```jsx
<Switch test={ condition }>
    <Case value="first">
        <span>If condition matches 'first'</span>
    </Case>
    <Case value="second">
        <span>If condition matches 'second'</span>
    </Case>
</Switch>
```

Component | Prop | Type | Notes
--------- | ---- | ---- | -----
`<Switch />` | `test` | *any* | The expression to check each case against.
`<Case />` | `value` | *any* | The value to compare against `test`.

The first matching case is rendered. If multiple cases match, only the first is rendered and and error is reported to the console.

## `<ForEach />`

```jsx
<ForEach items={ data }
         component={ DataView }
         as="item"
         spread
         keyGen={(item, index) => index}
         rest="wahtever I want" />                  
```

Prop | Type | Notes
---- | ---- | -----
`items` | `any[]` | Array of items to pass to the child components
`component` | *React component* | The component that will be used to render each item in the `items` array.
`as` | `string` | Optional. Specifies the name of the prop used to pass item to the rendered component. Default is `item`.
`spread` | `Boolean` | Optional. When specified, instead of the item being passed as a single prop to the rendered component, each entry within the item is passed as a separate prop, similar to `<Component {...item} />`. Note `as` and `spread` are mutually exclusive.
`keyGen` | `string` or `function` | Optional. Control over the key for each created child. If a `string` is passed, then it is assumed to be a property of each item. If a function is passed, it is called for each item with the item and index as arguments and is expected to return a uniue key.
*rest* | *any* | Any other props provided to `<ForEach />` are passed through to each `component` instances as-is.


# License

[MIT License](./LICENSE)
