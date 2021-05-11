<style lang="scss" src="./Subheader.scss">
</style>

<script>
let klass = '';
export let inset = false;
export let style = null;
export { klass as class };

</script>

<div class="s-subheader {klass}" class:inset style="{style}">
  <slot />
</div>
