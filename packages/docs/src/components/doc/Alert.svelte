<svelte:options immutable="{true}" />

<style global>
.s-alert--doc p {
  margin-bottom: 0 !important;
}

</style>

<script context="module">
import { mdiInformation, mdiAlert, mdiAlertOctagram, mdiCheck } from '@mdi/js';

const icons = {
  info: mdiInformation,
  danger: mdiAlert,
  warning: mdiAlertOctagram,
  success: mdiCheck,
};

</script>

<script>
import { Alert, Icon } from 'sveltify/src';

export let type = 'info';
const icon = icons[type];

</script>

<Alert class="s-alert--doc {type}-text" border="left" text>
  <div slot="icon">
    <Icon path="{icon}" />
  </div>
  <slot />
</Alert>
