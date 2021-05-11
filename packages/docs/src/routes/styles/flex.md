---
title: Flex
description: Flex helper classes allow you to modify flexbox parents and children.
keywords: flex helper classes, flex classes, svelte materialify flex
related:
  - getting-started/usage/
  - styles/text-and-typography/
---

<script>
  let breakpoints = ['-', '-sm-', '-md-', '-lg-', '-xl-'];
</script>

# Flex

Control the layout of flex containers with alignment, justification and more with responsive flexbox utilities.

## Enable Flexbox

Display helpers enable you to turn any element into a flexbox container using classes. You can also customize flex utilities to apply based upon various breakpoints.

<ul class='font-weight-bold'>
  {#each breakpoints as bp}
    <li>.d{bp}flex</li>
    <li>.d{bp}inline-flex</li>
  {/each}
</ul>

## Flex Direction

By default the flex direction is set to `row`, using these helpers can help you change it. You can also change the flex direction at certain breakpoints.

<Components.Example file="flex/direction" />

<ul class='font-weight-bold'>
  {#each breakpoints as bp}
    <li>.flex{bp}row</li>
    <li>.flex{bp}row-reverse</li>
    <li>.flex{bp}column</li>
    <li>.flex{bp}column-reverse</li>
  {/each}
</ul>

## Flex Justify

The `justify-content` flex setting can be changed using the flex justify classes. This by default will modify the flexbox items on the **x-axis** but is reversed when using `flex-direction: column`, modifying the **y-axis**. Choose from _start_ (browser default), _end_, _center_, _between_, or _around_.

<Components.Example file="flex/justify" />

<ul class='font-weight-bold'>
  {#each breakpoints as bp}
    <li>.justify{bp}start</li>
    <li>.justify{bp}end</li>
    <li>.justify{bp}center</li>
    <li>.justify{bp}space-between</li>
    <li>.justify{bp}space-around</li>
  {/each}
</ul>

## Flex Align

The `align-items` flex setting can be changed using the flex align classes. This by default will modify the flexbox items on the **y-axis** but is reversed when using `flex-direction: column`, modifying the **x-axis**. Choose from _start_, _end_, _center_, _baseline_, or _stretch_ (browser default).

<Components.Example file="flex/align" />

<ul class='font-weight-bold'>
  {#each breakpoints as bp}
    <li>.align{bp}start</li>
    <li>.align{bp}end</li>
    <li>.align{bp}center</li>
    <li>.align{bp}baseline</li>
    <li>.align{bp}stretch</li>
  {/each}
</ul>

## Flex Align (Self)

The `align-self` flex setting can be changed using the flex align-self classes. This by default will modify the flexbox items on the **x-axis** but is reversed when using `flex-direction: column`, modifying the **y-axis**. Choose from _start_, _end_, _center_, _baseline_, _auto_, or _stretch_ (browser default).

<Components.Example file="flex/alignSelf" />

<ul class='font-weight-bold'>
  {#each breakpoints as bp}
    <li>.align-self{bp}start</li>
    <li>.align-self{bp}end</li>
    <li>.align-self{bp}center</li>
    <li>.align-self{bp}baseline</li>
    <li>.align-self{bp}auto</li>
    <li>.align-self{bp}stretch</li>
  {/each}
</ul>

## Flex Align (Content)

The align-content flex setting can be changed using the flex align-content classes. This by default will modify the flexbox items on the x-axis but is reversed when using flex-direction: column, modifying the y-axis. Choose from start (browser default), end, center, between, around or stretch.

<Components.Example file="flex/alignContent" />

<ul class='font-weight-bold'>
  {#each breakpoints as bp}
    <li>.align-content{bp}start</li>
    <li>.align-content{bp}end</li>
    <li>.align-content{bp}center</li>
    <li>.align-content{bp}space-between</li>
    <li>.align-content{bp}space-around</li>
    <li>.align-content{bp}stretch</li>
  {/each}
</ul>

## Flex Wrap

By default `.d-flex` does not provide any wrapping (behaves similarly to flex-wrap: nowrap). This can be modified by applying flex-wrap helper classes in the format `flex-{condition}` where condition can be **nowrap**, **wrap**, or **wrap-reverse**.

<ul class='font-weight-bold'>
  {#each breakpoints as bp}
    <li>.flex{bp}nowrap</li>
    <li>.flex{bp}wrap</li>
    <li>.flex{bp}wrap-reverse</li>
  {/each}
</ul>

## Order

You can change the visual order of flex items with the `order` utilities.

<ul class='font-weight-bold'>
  {#each breakpoints as bp}
    <li>.order{bp}first</li>
    <li>.order{bp}0</li>
    <li>.order{bp}1</li>
    <li>.order{bp}2</li>
    <li>.order{bp}3</li>
    <li>.order{bp}4</li>
    <li>.order{bp}5</li>
    <li>.order{bp}6</li>
    <li>.order{bp}7</li>
    <li>.order{bp}8</li>
    <li>.order{bp}9</li>
    <li>.order{bp}10</li>
    <li>.order{bp}11</li>
    <li>.order{bp}12</li>
    <li>.order{bp}last</li>
  {/each}
</ul>

## Flex Grow and Shrink

Svelte Materialify has helper classes for applying grow and shrink manually. These can be applied by adding the helper class in the format `flex-{condition}-{value}`, where condition can be either grow or shrink and value can be either 0 or 1. The condition grow will permit an element to grow to fill available space, whereas shrink will permit an element to shrink down to only the space needs for its contents. However, this will only happen if the element must shrink to fit their container such as a container resize or being effected by a flex-grow-1. The value 0 will prevent the condition from occurring whereas 1 will permit the condition. The following classes are available:

<ul class='font-weight-bold'>
  {#each breakpoints as bp}
    <li>.flex{bp}grow-0</li>
    <li>.flex{bp}grow-1</li>
    <li>.flex{bp}shrink-0</li>
    <li>.flex{bp}shrink-1</li>
  {/each}
</ul>
