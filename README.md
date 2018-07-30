# react-control-flow

Control flow components for React to make writing JSX more natural.

[![Build Status](https://travis-ci.org/samuelneff/react-control-flow.svg?branch=master)](https://travis-ci.org/samuelneff/react-control-flow)

```jsx
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
npm install --save react-control-flow
```

# Documentation

## `<If />`

```jsx
<If test={ condition }>
    <span>Only if true</span>
</If>
```

`<If />` only has a single attribute, `test` which is the expression to evaluate. When it evaluates to true, the children are rendered. Otherwise the children are not rendered.

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

`<Switch />` has a single attribute, `test` which is the expression to evaluate and test each case against.

`<Case />` has a single attribute, `value` which is the value to compare against `test`.

The first matching case is rendered. If multiple cases match, only the first is rendered and and error is reported to the console.

## `<ForEach />`

```jsx
<ForEach items={ data }
         as="item"
         component={ DataView }
         rest="wahtever I want" />
```

`<ForEach />` has two required attributes, `items` and `component`. 

`items` is an array, typically of objects. Each item within the array is passed to the component as a prop.

`as`  is optional and specifies the name of the prop where the individual item is passed to the rendered component. Default is `item`.

`component` is a reference to the component to render for each item.

*rest*. Any other attributes povided to `<ForEach />` are passed through to each `component` instances as-is.

# License

[MIT License](./LICENSE)
