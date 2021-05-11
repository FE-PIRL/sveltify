---
title: Card Component
description: The Card component is a versatile component that can be used for anything from a panel to a static image.
keywords: cards, svelte materialify card, svelte card component
related:
  - components/buttons
  - components/images
  - styles/text-and-typography
---

<script>
  import Playground from '@/playground/Card.svelte';
</script>

# Cards

The `Card` component is a versatile component that can be used for anything from a panel to a static image. The card component has numerous helper components to make markup as easy as possible.

## Playground

A card has 4 basic components,: `CardTitle`, `CardSubtitle`, `CardText` and `CardActions`.

<Playground />

## API

- [Card](/api/Card/)
- [CardTitle](/api/CardTitle/)
- [CardSubtitle](/api/CardSubtitle/)
- [CardText](/api/CardText/)
- [CardActions](/api/CardActions/)

## Functional Components

### CardActions

The container used for placing actions for a card, such as [Button](/components/buttons/) or [Menu](/components/menus/). Also applies special margin to buttons so that they properly line up with other card content areas.

### CardSubtitle

Provides a default **font-size** and **padding** for card subtitles. Font-size can be overwritten with [typography](/styles/text-and-typography/) classes.

### CardText

Primarily used for **text content** in a card. Applies padding for text, reduces its font-size to .875rem.

### CardTitle

Provides a default **font-size** and **padding** for card titles. Font-size can be overwritten with [typography](/styles/text-and-typography/) classes.

## Examples

Below are some simple and complex examples.

### Outlined

An outlined card has 0 elevation and contains a soft border. <Components.Example file="Card/outlined" />

### Custom actions

With a simple conditional, you can easily add supplementary text that is hidden until opened. <Components.Example file="Card/customActions" />

### Grids

Using grids, you can create beautiful layouts.

### Horizontal

Using flexbox helper classes, you can create customized horizontal cards. <Components.Example file="Card/horizontal" />

### Information cards

Cards are entry points to more detailed information. To keep things concise, ensure to limit the number of actions the user can take. <Components.Example file="Card/information" />
