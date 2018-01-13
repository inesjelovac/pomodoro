<template>
  <div class="container content-height">
      <div class="row full-height">
        <div class="col-xs-12 offset-md-6 col-md-6">
          <div class="d-flex flex-column justify-content-center align-items-center full-height">
            <app-counter buttonText="Start Work" :time="getWorkCounterTime"></app-counter>
            <app-counter buttonText="Start Pause" :time="getRestCounterTime"></app-counter>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Counter from './Counter';

export default {
  computed: {
    ...mapGetters(['getWorkCounterTime', 'getRestCounterTime']),
  },
  components: {
    appCounter: Counter,
  },
};
</script>
