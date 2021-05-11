<script>
import Playground from '@/components/doc/Playground.svelte';
import { Breadcrumbs } from 'sveltify/src';

const controls = {
  large: { type: 'switch' },
  divider: {
    type: 'select',
    items: ['/', '>', ':', '\\'],
    mandatory: true,
  },
};

let values = {
  large: false,
  divider: '/',
};

const items = [
  { text: 'Dashboard', href: '#' },
  { text: 'Link 1', href: '#' },
  { text: 'Link 2', disabled: true },
];

</script>

<Playground controls="{controls}" bind:values>
  <Breadcrumbs large="{values.large}" items="{items}">
    <div slot="divider">{values.divider[0]}</div>
  </Breadcrumbs>
</Playground>
