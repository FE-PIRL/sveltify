<script>
import { Tabs, Tab, Icon } from 'sveltify/src';
import { mdiHome } from '@mdi/js';

</script>

<Tabs icons class="primary-color theme--dark">
  <div slot="tabs">
    <Tab>
      <Icon path="{mdiHome}" />
      Item 1
    </Tab>
    <Tab>
      <Icon path="{mdiHome}" />
      Item 2
    </Tab>
    <Tab>
      <Icon path="{mdiHome}" />
      Item 3
    </Tab>
  </div>
</Tabs>
