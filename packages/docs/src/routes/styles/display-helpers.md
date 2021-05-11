---
title: Display Helpers
description: Display helper classes allow you to control when elements should display based upon viewport.
keywords: display helper classes, display classes, svelte materialify display
---

# Display

The display helpers allow you to control the display of content. This includes being conditionally visible based upon the current viewport, or the actual element display type.

## Helper Classes

Specify the elements display property. These classes can be applied to all breakpoints from xs to xl. When using a base class, `.d-{value}`, the responsive classes are `.d-{breakpoint}-{value}`.

<ul class='font-weight-bold'>
{#each ['-', '-sm-', '-md-', '-lg-', '-xl-'] as bp}
  <li>.d{bp}none</li>
  <li>.d{bp}inline</li>
  <li>.d{bp}inline-block</li>
  <li>.d{bp}block</li>
  <li>.d{bp}flex</li>
  <li>.d{bp}inline-flex</li>
{/each}
</ul>

## JS Breakpoints

If you want to check the screen size in javascript then Svelte Materialify has got you covered. Check more about [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)

```html
<script>
  import { onMount } from 'svelte';
  onMount(async () => {
    let breakpoints = await import('sveltify/src/utils/breakpoints');
    breakpoints = breakpoints.default;

    // check if screen size is less than or equal to medium
    let mediumAndDown = window.matchMedia(breakpoints['md-and-down']).matches;
  });
</script>
```

Available properties:

<ul class='font-weight-bold'>
  <li>xs-only</li>
  <li>sm-only</li>
  <li>sm-and-down</li>
  <li>sm-and-up</li>
  <li>md-only</li>
  <li>md-and-down</li>
  <li>md-and-up</li>
  <li>lg-only</li>
  <li>lg-and-down</li>
  <li>lg-and-up</li>
  <li>xl-only</li>
</ul>
