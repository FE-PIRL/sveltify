<style>
div {
  position: relative;
  width: 200px;
  height: 250px;
  margin: 0 auto;
  padding-top: 16px;
}

</style>

<script>
import { Button, Overlay } from 'sveltify/src';

let active = false;

</script>

<div class="elevation-2 text-center">
  <Button
    class="green white-text"
    on:click="{() => {
      active = true;
    }}">
    Show Overlay
  </Button>
  <Overlay
    absolute
    active="{active}"
    on:click="{() => {
      active = false;
    }}" />
</div>
