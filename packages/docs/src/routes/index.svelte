<style lang="scss">
.title {
  font-weight: 300;
  font-size: 1.25rem;
}

#home {
  background-image: linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%);

  a {
    flex-grow: 1;
    margin: 4px;

    :global(.s-btn) {
      width: 100%;
    }
  }

  img {
    width: 192px;
  }
}

.footer-links > a {
  margin: 8px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
}

</style>

<script context="module">
export function preload() {
  this.fetch('sitemap.xml');
}

</script>

<script>
import { Container, Button, Icon, Row, Col, Footer, Alert } from 'sveltify/src';
import Meta from '@/components/Meta.svelte';
import { mdiSpeedometer, mdiGithub, mdiPlus, mdiTwitter } from '@mdi/js';

</script>

<Meta
  title="Svelte Material Design Component Framework - Svelte Materialify"
  description="Svelte Materialify is a  Material UI component library for Svelte, with full support for light and dark themes."
  keywords="svelte, material, ui, components, install svelte materialify" />

<div class="theme--dark" id="home">
  <Container class="pt-6 pb-6">
    <Row>
      <Col class="d-flex justify-center flex-column" md="7">
        <h1 class="mb-4 text-h2 text-md-h1">Svelte <br /> Materialify</h1>
        <p class="mb-3 title grey-text text-lighten-4">
          Svelte Materialify is a Svelte UI Library with beautifully handcrafted Material
          Components. No design skills required — everything you need to create amazing applications
          is at your fingertips.
        </p>
        <div class="d-flex flex-wrap">
          <a href="/getting-started/installation/" class="blue-text text-darken-2">
            <Button size="x-large" class="white elevation-4">
              <Icon path="{mdiSpeedometer}" class="mr-3" />
              Get Started
            </Button>
          </a>
          <a href="#why-sveltify" class="white-text">
            <Button depressed outlined size="x-large">Why?</Button>
          </a>
          <a
            href="https://github.com/TheComputerM/sveltify"
            target="_blank"
            class="black-text"
            rel="noopener">
            <Button depressed size="x-large" class="white">
              <Icon path="{mdiGithub}" class="mr-3" />
              GitHub
            </Button>
          </a>
        </div>
      </Col>
      <Col class="d-flex justify-center align-center flex-column" md="5">
        <img src="svelte-logo.png" alt="Svelte" />
        <Icon size="64px" path="{mdiPlus}" class="mt-4 mb-4" />
        <img src="logo-192.png" alt="Svelte Materialify" />
      </Col>
    </Row>
  </Container>
</div>
<br />

<Footer class="theme--dark">
  <div class="pa-4 text-center" style="width: 100%;">
    <img src="logo-192.png" alt="Svelte Materialify" width="128px" />
    <div class="footer-links">
      <a
        href="https://github.com/TheComputerM/sveltify"
        aria-label="GitHub"
        target="_blank"
        rel="noopener">
        <Icon path="{mdiGithub}" />
      </a>
      <a
        href="https://twitter.com/TheComputerM"
        aria-label="Twitter"
        target="_blank"
        rel="noopener">
        <Icon path="{mdiTwitter}" />
      </a>
    </div>
    <div class="mt-2">
      <span class="text-body-2">
        Released under the
        <a href="https://opensource.org/licenses/MIT" rel="noopener"> MIT License </a>
      </span>
      <p class="mt-1">Copyright © 2020 Mudit Somani</p>
    </div>
  </div>
</Footer>
