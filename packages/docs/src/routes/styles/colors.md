---
title: Colors
description: Learn about the colors of Material Design. Consume the javascript color pack directly in your application.
keywords: colors, material design colors, vuetify color pack, material color classes
---

<script>
  import {Row, Col} from 'sveltify/src';
  import colors from 'sveltify/src/utils/colors';
  function pickTextColor(bgColor) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ? 'black-text' : 'white-text';
  }
  function toDashCase(str) {
    return str.replace(/[A-Z]/, (match) => '-' + match.toLowerCase())
  }
</script>

<style>
  .color-block {
    padding: 14px 12px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
</style>

# Colors

Svelte Materialify provides all the colors in the material design pallete at your disposal. You can access these colors either through css classes, scss or javascript.

## Classes

Each color gets its own `text` and `background` variant. You can use these classes in your application like `<div class='red' />` for red background and `<span class='red-text' />`. These colors are defined over [here](https://github.com/TheComputerM/sveltify/blob/master/packages/sveltify/src/styles/tools/_colors.scss).

You can also change the variant of the background color by adding the class: `{lighten|darken}-{n}` and change the accent by adding the class `accent-{n}`

To change the variant of the text color by adding the class: `text-{lighten|darken}-{n}` and change the accent by adding the class `accent-{n}`

You can also do the same for theme colors such as `primary-color` for background color and `primary-text` for text color.

```html
<!-- backgrounds -->
<div class="red">Red</div>
<div class="yellow lighten-4">Light yellow</div>
<div class="deep-purple accent-1">Deep Purple</div>
<div class="primary-color">Primary</div>

<!-- text -->
<div class="red-text">Red</div>
<div class="yellow-text text-lighten-4">Light yellow</div>
<div class="deep-purple-text text-accent-1">Deep Purple</div>
<div class="primary-text">Primary</div>
```

## SCSS

To add material colors in your own styles, just include the scss file.

```scss
@import 'sveltify/src/styles/tools/colors';

h1 {
  color: material-color('red', 'base');
  background-color: material-color('green', 'lighten-5');
}
```

## Javascript

You can also import colors from the included [utility](https://github.com/TheComputerM/sveltify/blob/master/packages/sveltify/src/utils/colors.js) in javascript if you wish to do so.

```js
import colors from 'sveltify/src/utils/colors';
let red = colors.red.base;
let lightRed = colors.red['lighten-1'];

import { deepPurple } from 'sveltify/src/utils/colors';
let purple = deepPurple.base;
```

## Color Pack

<Row>
  {#each Object.keys(colors) as color}
    <Col cols=12 sm=12 md=4>
      <h6 class="mt-4 mb-2 text-h5">{toDashCase(color)}</h6>
      {#each Object.keys(colors[color]) as variant}
        <div class="{toDashCase(color)} {variant} color-block {pickTextColor(colors[color][variant])}">
          <span>{variant}</span>
          <span>{colors[color][variant]}</span>
        </div>
      {/each}
    </Col>
  {/each}
</Row>
