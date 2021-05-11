<style lang="scss" src="./Avatar.scss" global>
</style>

<script>
import Style from '../../internal/Style';

let klass = '';
export { klass as class };
export let size = 48;
export let tile = false;
export let style = null;

</script>

<div class="s-avatar {klass}" class:tile use:Style="{{ 'avatar-size': size }}" style="{style}">
  <slot />
</div>
