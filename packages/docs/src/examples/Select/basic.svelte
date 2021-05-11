<script>
import { Row, Col, Select } from 'sveltify/src';

const items = ['foo', 'bar', 'fizz', 'buzz'];

</script>

<Row>
  <Col>
    <Select items="{items}">Regular</Select>
    <Select filled items="{items}">Filled</Select>
  </Col>
  <Col>
    <Select solo items="{items}" placeholder="Solo" />
    <Select outlined items="{items}">Outlined</Select>
  </Col>
</Row>
