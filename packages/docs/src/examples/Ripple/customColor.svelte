<script>
import { Ripple } from 'sveltify/src';
import Colors from 'sveltify/src/utils/colors';

const colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange'];

</script>

{#each colors as color}
  <div class="pa-3" use:Ripple="{{ color: Colors[color].base, opacity: 0.3 }}">
    Item with '{color}' color ripple.
  </div>
{/each}
