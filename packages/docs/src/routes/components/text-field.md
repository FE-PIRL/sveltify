---
title: Text Field Component
description: The text field component accepts textual input from users.
keywords: text fields, svelte materialify text field, svelte text field component
related:
  - components/selects
  - components/sliders
  - api/TextField
---

# Text Fields

Text fields components are used for collecting user provided information.

<Components.Alert type='info'> All the properties which are not in the API list will be directly forwarded to the input element (such as maxlength). </Components.Alert>

## API

- [TextField](/api/TextField/)

## Usage

<Components.Example file="TextField/variants" />

## Examples

### Dense

You can reduces the text field height with `dense` prop. <Components.Example file="TextField/dense" />

### Disabled and Readonly

Text fields can be `disabled` or `readonly`. <Components.Example file="TextField/disabled" />

### Icons

You can add icons to the text field with `prepend`, `append`, `prepend-outer` and `append-outer` slots. <Components.Example file="TextField/icons" />

### Clearable

When `clearable`, you can customize the clear icon with clear-icon. <Components.Example file="TextField/clearable" />

### Counter

Use a `counter` prop to inform a user of the character limit. The counter does not perform any validation by itself. You will need to pair it with either the internal validation system, or a 3rd party library. <Components.Example file="TextField/counter" />

### Label

Text field label can be defined in the default slot. <Components.Example file="TextField/label" />

### Password

A password input can be used with an appended icon and callback to control the visibility. <Components.Example file="TextField/password" />

### Validation

Svelte Materialify provides inbuild simple validation through the `rules` prop. The prop accepts a array of callbacks with the input value as an arguement. By default this runs a check whenever the user types something, to delay the validation till the input loses focus use `validateOnBlur`.

```js
const rules = [
  (value) => {
    if (condition) return 'Error Message';
    return false;
  },
];
```

<Components.Example file="TextField/validation" />
