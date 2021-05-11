<script>
import { ClickOutside } from 'sveltify/src';

let active = false;

function click() {
  active = true;
}

function clickOutside() {
  active = false;
}

</script>

<div
  class="elevation-4 rounded text-h6"
  style="
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;margin: 12px auto;"
  class:primary-color="{active}"
  class:white-text="{active}"
  use:ClickOutside
  on:clickOutside="{clickOutside}"
  on:click="{click}">
  Click
  {active ? 'Outside' : 'Me'}
</div>
