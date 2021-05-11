<style lang="scss" src="./CardTitle.scss" global>
</style>

<script>
let klass = '';
export { klass as class };
export let style = null;

</script>

<div class="s-card-title {klass}" style="{style}">
  <slot />
</div>
