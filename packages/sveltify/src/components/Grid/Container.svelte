<style lang="scss" global>
@import '../../styles/variables';

.s-container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: $container-padding-x;

  &.fluid {
    max-width: 100%;
  }

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    max-width: map-get($container-max-widths, 'md');
  }

  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    max-width: map-get($container-max-widths, 'lg');
  }

  @media #{map-get($display-breakpoints, 'xl-only')} {
    max-width: map-get($container-max-widths, 'xl');
  }
}

</style>

<script>
let klass = '';
export let fluid = false;
export let style = null;
export { klass as class };

</script>

<div class="s-container {klass}" class:fluid style="{style}">
  <slot />
</div>
