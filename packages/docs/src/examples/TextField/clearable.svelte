<script>
import { TextField, Row, Col } from 'sveltify/src';

const value = 'Hello';

</script>

<Row>
  <Col>
    <TextField clearable value="{value}">Regular</TextField>
    <br />
    <TextField clearable filled value="{value}">Filled</TextField>
  </Col>
  <Col>
    <TextField clearable outlined value="{value}">Outlined</TextField>
    <br />
    <TextField clearable solo value="{value}" />
  </Col>
</Row>
