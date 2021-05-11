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
import { SlideGroup, SlideItem, Ripple } from 'sveltify/src';

</script>

<SlideGroup centerActive activeClass="white-text">
  {#each Array(15) as _, i}
    <SlideItem let:active>
      <div class="rounded" class:primary-color="{active}" use:Ripple>{i + 1}</div>
    </SlideItem>
  {/each}
</SlideGroup>
