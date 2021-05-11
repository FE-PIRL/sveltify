<style lang="scss" src="./Footer.scss" global>
</style>

<script>
let klass = '';
export { klass as class };
export let absolute = false;
export let fixed = false;
export let inset = false;
export let padless = false;
export let style = null;

</script>

<footer
  class="s-footer {klass}"
  class:absolute
  class:fixed
  class:inset
  class:padless
  style="{style}">
  <slot />
</footer>
