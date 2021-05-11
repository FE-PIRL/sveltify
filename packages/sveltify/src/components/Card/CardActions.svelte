<style lang="scss" src="./CardActions.scss" global>
</style>

<script>
let klass = '';
export { klass as class };
export let style = null;

</script>

<div class="s-card-actions {klass}" style="{style}">
  <slot />
</div>
