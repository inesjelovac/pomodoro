<template>
  <button type="button" class="btn btn-dark btn-lg" @click="onClick">{{ counterValue | formatTime }}</button>
</template>

<script>
import moment from 'moment';

export default {
  props: ['counterValue'],
  methods: {
    onClick() {
      this.$emit('toggleCounter');
    },
  },
  filters: {
    formatTime(value) {
      return `${moment.duration(value, 'seconds').minutes()} : ${moment.duration(value, 'seconds').seconds()}`;
    },
  },
};
</script>
