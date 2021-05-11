<style>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
}

</style>

<script>
import { Touch } from 'sveltify/src';

let x = 0;
let y = 0;
function touch({ detail }) {
  ({ x, y } = detail);
}

</script>

<div class="grey lighten-4 black-text" use:Touch on:touch="{touch}">
  <span>X: <b>{x}</b></span>
  <span>Y: <b>{y}</b></span>
</div>
