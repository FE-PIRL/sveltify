<svelte:options immutable="{true}" />

<style lang="scss">
.code-block {
  position: relative;

  :global {
    .s-btn {
      top: 0.5rem;
      right: 0.5rem;
      z-index: 1;

      .s-btn__content {
        opacity: 0.7;
        transition: opacity 250ms;
      }
    }
  }

  &:hover {
    :global(.s-btn .s-btn__content) {
      opacity: 1;
    }
  }
}

span {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  color: var(--theme-text-secondary);
  font-weight: 700;
  font-size: 0.7rem;
  font-family: monospace;
  text-transform: uppercase;
  user-select: none;
}

</style>

<script>
import Clipboard from 'clipboard';
import { Button, Icon } from 'sveltify/src';
import { mdiContentCopy } from '@mdi/js';

export let lang = '';
function copy(node) {
  const toCopy = node.querySelector('pre').textContent;
  const clipboard = new Clipboard(node.querySelector('.s-btn'), {
    text: () => toCopy,
  });
  return {
    destroy() {
      clipboard.destroy();
    },
  };
}

</script>

<div class="code-block" use:copy>
  <pre
    class="language-{lang}">
    <code
      class="language-{lang}">
      <slot />
    </code>
  </pre>
  <Button fab depressed size="small" style="position: absolute;" aria-label="Copy">
    <Icon size="20px" path="{mdiContentCopy}" />
  </Button>
  <span aria-hidden="true">{lang}</span>
</div>
