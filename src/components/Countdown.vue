<template>
  <button type="button" class="btn btn-dark btn-lg" @click="onClick">{{ counterValue }}</button>
</template>

<script>
export default {
  props: ['counterValue'],
  methods: {
    onClick() {
      this.$emit('toggleCounter');
    },
  },
};
</script>
