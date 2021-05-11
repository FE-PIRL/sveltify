<script>
import { Row, Col, Select } from 'sveltify/src';

const items = [
  { name: 'Foo', value: 'foo' },
  { name: 'Bar', value: 'bar' },
  { name: 'Fizz', value: 'fizz' },
  { name: 'Buzz', value: 'buzz' },
];

</script>

<Row>
  <Col>
    <Select disabled items="{items}">Regular</Select>
    <Select disabled filled items="{items}">Filled</Select>
  </Col>
  <Col>
    <Select disabled solo items="{items}" placeholder="Solo" />
    <Select disabled outlined items="{items}">Outlined</Select>
  </Col>
</Row>
