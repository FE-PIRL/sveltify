<svelte:options immutable="{true}" />

<style>
.example {
  margin-bottom: 36px;
  border: thin solid var(--theme-dividers);
  border-radius: 4px;
}

.example-toolbar {
  border-bottom: thin solid var(--theme-dividers);
}

</style>

<script>
import { theme } from '@/util/stores';
import links from '@/util/links';
import { onMount } from 'svelte';
import { slide } from 'svelte/transition';
import Markup from './Markup.svelte';
import { Icon, Button } from 'sveltify/src';
import { mdiInvertColors, mdiGithub, mdiCodeTags } from '@mdi/js';

export let file = '';
export let style = null;

let component;
let source = '';
const [dir, name] = file.split('/');
onMount(() => {
  import(`../../examples/${dir}/${name}.svelte`).then((data) => {
    component = data.default;
    source = data.source;
  });
});

$: colorInvertable = $theme === 'light';
let codeVisible = false;
let codeThemeDark = false;

</script>

<div class="example">
  <div class="example-toolbar text-right pa-1">
    {#if colorInvertable}
      <Button
        fab
        icon
        size="small"
        aria-label="invert color"
        on:click="{() => (codeThemeDark = !codeThemeDark)}">
        <Icon path="{mdiInvertColors}" />
      </Button>
    {/if}
    <a
      href="{links.docs}/src/examples/{file}.svelte"
      aria-label="GitHub"
      rel="noopener noreferrer"
      target="_blank">
      <Button fab icon size="small" aria-label="GitHub" class="text--primary">
        <Icon path="{mdiGithub}" />
      </Button>
    </a>
    <Button
      fab
      icon
      size="small"
      aria-label="Show Code"
      on:click="{() => (codeVisible = !codeVisible)}">
      <Icon path="{mdiCodeTags}" />
    </Button>
  </div>
  {#if codeVisible}
    <div transition:slide="{{ duration: 250 }}">
      <Markup lang="svelte">
        {@html source}
      </Markup>
    </div>
  {/if}
  <div class="pa-2" class:theme--dark="{codeThemeDark}" style="{style}">
    <svelte:component this="{component}" />
  </div>
</div>
