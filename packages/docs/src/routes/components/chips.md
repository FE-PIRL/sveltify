---
title: Chip Component
description: The chip component allows a user to enter information, make selections, filter content or trigger actions.
keywords: chips, svelte materialify chip, svelte chip component
related:
  - components/avatars
  - components/icons
  - components/selects
---

<script>
  import Playground from '@/playground/Chip.svelte';
</script>

# Chips

The `Chip` component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction.

## Playground

Chips come in the following variations: Default, label, closeable, outlined, pill. The default slot of `Chip` will also accept avatars and icons alongside text. <Playground />

## API

- [Chip](/api/Chip/)

## Examples

Below is a collection of simple to complex examples.

### Colored

Any color from the Material Design palette can be used to change a chips color. <Components.Example file="Chip/colored" />

### Icon

Chips can use text or any icon available in any font library. <Components.Example file="Chip/icon" />

### Outlined

Outlined chips inherit their border color from the current text color. <Components.Example file="Chip/outlined" />

### Label

Label chips have reduced border-radius. <Components.Example file="Chip/label" />

### Sizes

Chip component can have various sizes from `x-small` to `x-large`. <Components.Example file="Chip/sizes" />

### Closable

Closable chips can be controlled by the active prop. You can also listen to the `on:close` event if you want to know when a chip has been closed. <Components.Example file="Chip/closable" />
