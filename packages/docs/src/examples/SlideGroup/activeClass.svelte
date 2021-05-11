<style>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 200px;
  margin: 0 10px;
  background-color: var(--theme-dividers);
}

</style>

<script>
import { SlideGroup, SlideItem, Ripple, Icon } from 'sveltify/src';
import { mdiMinus, mdiPlus } from '@mdi/js';

</script>

<SlideGroup activeClass="white-text">
  <span slot="previous">
    <Icon path="{mdiMinus}" />
  </span>
  {#each Array(15) as _, i}
    <SlideItem let:active>
      <div class="rounded" class:primary-color="{active}" use:Ripple>{i + 1}</div>
    </SlideItem>
  {/each}
  <span slot="next">
    <Icon path="{mdiPlus}" />
  </span>
</SlideGroup>
