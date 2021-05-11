<style lang="scss" src="./Divider.scss">
</style>

<script>
let klass = '';
export { klass as class };
export let inset = false;
export let vertical = false;
export let style = null;

</script>

<hr
  class="s-divider {klass}"
  role="separator"
  aria-orientation="{vertical ? 'vertical' : 'horizontal'}"
  class:inset
  class:vertical
  style="{style}" />
