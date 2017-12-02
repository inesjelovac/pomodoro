<template>
  <button type="button" class="btn btn-dark btn-lg" @click="onClick">{{ buttonText }}</button>
</template>

<script>
export default {
  props: ['buttonText'],
  methods: {
    onClick() {
      this.$emit('startCounter');
    },
  },
};
</script>
