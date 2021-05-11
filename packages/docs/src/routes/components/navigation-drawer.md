---
title: Navigation drawer Component
description: The navigation drawer component contains internal navigation links for an application and can be permanently on-screen or controlled programmatically.
keywords: navigation drawer, svelte materialify navigation drawer, svelte navigation drawer component
related:
  - components/lists
  - components/icons
  - components/app-bar
---

<script>
  import Playground from '@/playground/NavigationDrawer.svelte';
</script>

# Navigation Drawers

The `NavigationDrawer` component is what your users will utilize to navigate through the application. The navigation-drawer is pre-configured to work with or without any router right out the box. Within your application you will generally place the NavigationDrawer as a direct child of MaterialApp.

<Components.Alert type="warning"> It is recommended that you do not toggle the navigation drawer with an <code>#if</code> block as if the navigation contains a large about of data, it is better for it to be always loaded in the DOM. Use the active prop instead. </Components.Alert>

## Playground

<Playground />

## API

- [NavigationDrawer](/api/NavigationDrawer/)

## Examples

Below is a collection of simple to complex examples.

## Colored Drawer

Navigation drawers can be customized to fit any application's design. Here we apply a custom background color and an appended content area using the **append** slot. <Components.Example file="NavigationDrawer/colored" />

## Mini

When using the mini-variant prop, the drawer will shrink (default 56px) and hide everything inside of v-list except the first element. <Components.Example file="NavigationDrawer/mini" />

## Temporary

A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. This drawer behavior is mimicked by default when on mobile. Clicking outside of the drawer will cause it to close. <Components.Example file="NavigationDrawer/temporary" style="overflow-x:hidden;padding:0!important;" />

## Right

Navigation drawers can also be positioned on the right side of your application (or an element). This is also useful for creating a side-sheet with auxillary information that may not have any navigation links. <Components.Example file="NavigationDrawer/right" />
