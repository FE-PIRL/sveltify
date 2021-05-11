<script>
import { AppBar, Button, Icon } from 'sveltify/src';
import { mdiMenu, mdiMagnify } from '@mdi/js';

</script>

<AppBar dense>
  <div slot="icon">
    <Button fab depressed>
      <Icon path="{mdiMenu}" />
    </Button>
  </div>
  <span slot="title">Title</span>
  <div style="flex-grow: 1;"></div>
  <Button>Item</Button>
  <Button fab depressed>
    <Icon path="{mdiMagnify}" />
  </Button>
</AppBar>
