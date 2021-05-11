<style lang="scss" src="./DataTable.scss" global>
</style>

<script>
let klass = '';
export { klass as class };

</script>

<div class="s-tbl {klass}">
  <table>
    <slot />
  </table>
</div>
