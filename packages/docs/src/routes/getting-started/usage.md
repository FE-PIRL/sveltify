---
title: Usage
description: Here is how to use Svelte Materialify with best practices in mind.
keywords: quick start, usage, how to, use svelte materialify
related:
  - getting-started/installation
  - components/material-app
---

# Usage

Once you have installed Svelte Materialify, it's time to learn how to use it.

## Importing the Components

Depending on the Install you chose, there are two ways to import:

### With Default styles

In your svelte files, import the _compiled_ module `from 'sveltify'`:

```html
<script>
  import { MaterialApp, Button } from 'sveltify';
</script>

<MaterialApp>
  <button>Compiled (Default styles, used in the REPL)</button>
</MaterialApp>
```

### With Custom styles

In your svelte files, import the _uncompiled_ module `from 'sveltify/src'`:

```html
<script>
  import { MaterialApp, Button } from 'sveltify/src';
  //this works, too:
  import Button from 'sveltify/src/components/Button/Button.svelte';
</script>

<MaterialApp>
  <button>Uncompiled (Custom styles, defined in _material-theme.scss)</button>
</MaterialApp>
```

## Layout

All components should be children of `MaterialApp`, which provides all the **global styles** and enables theming:

```html
<script>
  import { MaterialApp } from 'sveltify'; //or from `/src`
  let theme = 'light';
</script>

<MaterialApp theme="{theme}">
  <slot />
</MaterialApp>
```

If you don't want any global styles (other than theming and colors), you can use `MaterialAppMin` instead:

```html
<script>
  import { MaterialAppMin } from 'sveltify'; //or from `/src`
  let theme = 'light';
</script>

<MaterialAppMin theme="{theme}">
  <slot />
</MaterialAppMin>
```

## Theming

You want to customise some SCSS variables? Worry not, just put them in the **\_material-theme.scss** you had created:

```scss
$primary-color: #004d26;
$secondary-color: #ff99cc;
$error-color: #420420;
$success-color: #66ff99;

$body-font-family: "Poppins", "Segoe UI", sans-serif;

$spacer: 6px !default;
...
```

To access these variables in your own components, just import the variable file from svelte materialify:

```scss
@import 'sveltify/src/styles/variables';
```

<Components.Alert type='info'>

If you want to use SCSS and SASS styles in your own components, [use svelte-preprocess](https://github.com/sveltejs/svelte-preprocess/blob/main/docs/usage.md).

</Components.Alert>
