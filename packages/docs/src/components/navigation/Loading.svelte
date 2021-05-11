<style>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--theme-surface);
}

</style>

<script>
import { markdown } from '@/util/stores';
import { ProgressCircular } from 'sveltify/src';

</script>

{#if !$markdown}
  <div class="loading">
    <ProgressCircular indeterminate size="75" width="5" color="primary" />
  </div>
{/if}
