<style lang="scss" src="./Table.scss" global>
</style>

<script>
let klass = '';
export let dense = false;
export let fixedHeader = false;
export let style = null;
export { klass as class };

</script>

<div class="s-table__wrapper {klass}" style="{style}">
  <table class="s-table" class:dense class:fixed-header="{fixedHeader}">
    <slot />
  </table>
</div>
