<script>
import { Row, Col, Select } from 'sveltify/src';

const items = [
  { name: 'Foo', value: 'foo' },
  { name: 'Bar', value: 'bar' },
  { name: 'Fizz', value: 'fizz' },
  { name: 'Buzz', value: 'buzz' },
];
const items2 = ['foo', 'bar', 'fizz', 'buzz'];

</script>

<Row>
  <Col>
    <Select multiple items="{items}">Regular</Select>
    <Select multiple filled items="{items}">Filled</Select>
  </Col>
  <Col>
    <Select multiple solo items="{items2}" placeholder="Solo" />
    <Select multiple outlined items="{items2}">Outlined</Select>
  </Col>
</Row>
