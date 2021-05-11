---
title: App Bar Component
description: The app bar component is a supercharged toolbar with advanced scrolling techniques and application layout support.
keywords: app bars, svelte materialify app bar, svelte app bar component
related:
  - components/buttons
  - components/icons
  - api/AppBar
---

<script>
  import Playground from '@/playground/AppBar.svelte';
</script>

# App Bar

The AppBar component is pivotal to any graphical user interface (GUI), as it generally is the primary source of site navigation. The app-bar component works great in conjunction with a NavigationDrawer for providing site navigation in your application.

## Playground

The `AppBar` component is used for application-wide actions and information. <Playground />

## API

- [AppBar](/api/AppBar/)

## Usage

Here is a basic example on how to use the AppBar. <Components.Example file="AppBar/basic" />

## Examples

Below is a collection of simple to complex examples.

### Dense

You can make app-bar dense. A dense app bar has lower height than regular one. <Components.Example file="AppBar/dense" />

### Collapsing Bars

With the collapse prop you can easily control the state of toolbar that the user interacts with. <Components.Example file="AppBar/collapse" />

### Navigation Drawers

It is very easy to integrate navigation drawers with app bars. <Components.Example file="AppBar/drawer" style="overflow-x:hidden;padding:0!important;" />
