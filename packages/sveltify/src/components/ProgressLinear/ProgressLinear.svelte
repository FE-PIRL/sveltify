<style lang="scss" src="./ProgressLinear.scss">
</style>

<script>
import BackgroundColor from '../../internal/BackgroundColor';

let klass = '';
export { klass as class };
export let value = 0;
export let active = true;
export let indeterminate = false;
export let height = '4px';
export let backgroundColor = 'primary';
export let backgroundOpacity = 0.3;
export let color = backgroundColor;
export let buffer = 100;
export let reversed = false;
export let stream = false;
export let rounded = false;
export let striped = false;
export let style = '';

</script>

<div
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="{value}"
  class="s-progress-linear {klass}"
  class:inactive="{!active}"
  class:reversed
  class:rounded
  style="height: {height};{style}">
  {#if reversed}
    <div
      use:BackgroundColor="{backgroundColor}"
      class="background"
      style="right: {value}%; width: {buffer - value}%; opacity: {backgroundOpacity};">
    </div>
  {:else}
    <div
      use:BackgroundColor="{backgroundColor}"
      class="background"
      style="left: {value}%; width: {buffer - value}%; opacity: {backgroundOpacity};">
    </div>
  {/if}

  {#if indeterminate}
    <div use:BackgroundColor="{color}">
      <div class="indeterminate long"></div>
      <div class="indeterminate short"></div>
    </div>
  {:else}
    <div use:BackgroundColor="{color}" class="determinate" class:striped style="width: {value}%;">
    </div>
  {/if}

  <div class="s-progress-linear__content">
    <slot />
  </div>

  {#if stream}
    <div class="stream {color}" style="width: {100 - buffer}%;"></div>
  {/if}
</div>
