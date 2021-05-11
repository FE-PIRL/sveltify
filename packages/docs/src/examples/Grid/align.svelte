<style>
.container {
  margin-bottom: 12px;
  padding: 8px;
  background-color: var(--theme-app-bar);
}

</style>

<script>
import { Row, Col } from 'sveltify/src';

const alignments = ['start', 'center', 'end'];

</script>

{#each alignments as align}
  <div class="container">
    <Row class="align-{align}" noGutters style="height: 150px;">
      <Col>
        <div class="pa-2">One of Three</div>
      </Col>
      <Col>
        <div class="pa-2">One of Three</div>
      </Col>
      <Col>
        <div class="pa-2">One of Three</div>
      </Col>
    </Row>
  </div>
{/each}

<div class="container">
  <Row noGutters style="height: 150px;">
    {#each alignments as align}
      <Col class="align-self-{align}">
        <div class="pa-2">One of Three</div>
      </Col>
    {/each}
  </Row>
</div>
