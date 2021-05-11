<script>
import { ProgressCircular } from 'sveltify/src';

</script>

<div class="d-flex justify-center align-center">
  <ProgressCircular size="{50}" indeterminate color="primary" />
  <div class="pl-4"></div>
  <ProgressCircular width="{3}" indeterminate color="indigo" />
  <div class="pl-4"></div>
  <ProgressCircular size="{70}" width="{7}" indeterminate color="success" />
  <div class="pl-4"></div>
  <ProgressCircular width="{1}" indeterminate color="red" />
  <div class="pl-4"></div>
  <ProgressCircular size="{24}" indeterminate color="pink" />
</div>
