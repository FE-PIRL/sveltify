<style lang="scss" src="./CardText.scss" global>
</style>

<script>
let klass = '';
export { klass as class };
export let style = null;

</script>

<div class="s-card-text {klass}" style="{style}">
  <slot />
</div>
