<script>
import { Row, Col, Select, Icon } from 'sveltify/src';
import { mdiHome } from '@mdi/js';

const items = [
  { name: 'Foo', value: 'foo' },
  { name: 'Bar', value: 'bar' },
  { name: 'Fizz', value: 'fizz' },
  { name: 'Buzz', value: 'buzz' },
];

</script>

<Row>
  <Col>
    <Select items="{items}">
      <span slot="prepend-outer">
        <Icon path="{mdiHome}" />
      </span>
      Regular
    </Select>
  </Col>
  <Col>
    <Select items="{items}">
      Regular
      <span slot="append-outer">
        <Icon path="{mdiHome}" />
      </span>
    </Select>
  </Col>
</Row>
