<script>
import { Breadcrumbs } from 'sveltify/src';

const items = [
  { text: 'Dashboard', href: '/components/breadcrumbs/' },
  { text: 'Link 1', href: '/components/breadcrumbs/' },
  { text: 'Link 2', disabled: true },
];

</script>

<Breadcrumbs items="{items}" />
<Breadcrumbs large items="{items}" />
