<template>
  <div class="container content-height">
      <div class="row full-height">
        <div class="col-xs-12 offset-md-6 col-md-6">
          <div class="d-flex flex-column justify-content-center align-items-center full-height">
            <app-counter buttonText="Start Work"></app-counter>
            <app-counter buttonText="Start Pause"></app-counter>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Counter from './Counter';

export default {
  components: {
    appCounter: Counter,
  },
};
</script>
