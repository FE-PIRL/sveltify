<script>
import { TextField, Row, Col } from 'sveltify/src';

const rules = [(v) => v.length <= 20 || 'Max 20 characters'];

</script>

<Row>
  <Col>
    <TextField clearable counter="{20}" rules="{rules}">Regular</TextField>
    <br />
    <TextField clearable filled counter="{20}" rules="{rules}">Filled</TextField>
  </Col>
  <Col>
    <TextField clearable outlined counter="{20}" rules="{rules}">Outlined</TextField>
    <br />
    <TextField clearable solo counter="{20}" rules="{rules}" />
  </Col>
</Row>
