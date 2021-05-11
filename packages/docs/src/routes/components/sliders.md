---
title: Slider Component
description: The slider component is a better visualization of the number input. It is used for gathering numerical user data.
keywords: sliders, svelte materialify slider, svelte slider component
related:
  - components/selects
  - components/text-field
  - components/lists
---

# Sliders

The `Slider` component is a better visualization of the number input. It is used for gathering numerical user data.

## API

- [Slider](/api/Slider/)

## Examples

Below is a collection of simple to complex examples.

### Min and Max values

You can set `min` and `max` values of sliders. <Components.Example file="Slider/minMax" />

### Disabled

You cannot interact with disabled sliders. <Components.Example file="Slider/disabled" />

### Readonly

You cannot interact with readonly sliders, but they look as ordinary ones. <Components.Example file="Slider/readonly" />

### Icons

You can add icons to the slider with the `append-outer` and `prepend-outer` slots. <Components.Example file="Slider/icons" />

### Thumb

You can display a thumb. <Components.Example file="Slider/thumb" />

### Inverse Label

Slider with `inverseLabel` property displays label at the end of it. <Components.Example file="Slider/inverseLabel" />

### Step

Steps are predetermined values to which the user can move the slider. <Components.Example file="Slider/step" />

### Colors

You can set custom colors for slider and thumb with the help of `color` and `thumbClass`. <Components.Example file="Slider/colors" />

### Range

Range sliders. <Components.Example file="Slider/range" />
