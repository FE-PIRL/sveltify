<style lang="scss" src="./CardSubtitle.scss" global>
</style>

<script>
let klass = '';
export { klass as class };
export let style = null;

</script>

<div class="s-card-subtitle {klass}" style="{style}">
  <slot />
</div>
