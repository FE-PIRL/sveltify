<style lang="scss" src="./DataTableHead.scss" global>
</style>

<script>
import { setContext } from 'svelte';

let klass = '';
export { klass as class };

setContext('is-table-head', true);

</script>

<thead class="s-tbl-head {klass}">
  <slot />
</thead>
