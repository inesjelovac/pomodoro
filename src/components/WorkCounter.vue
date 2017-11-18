<template>
  <div class="row">
    <div class="col-xs-12 offset-md-6 col-md-6">
      <button type="button" class="btn btn-dark btn-lg" @click="startCounter">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonText: 'Start Work',
      time: 10, // 25 * 60,
      counterValue: 0,
    };
  },
  methods: {
    resetCounter() {
      this.counterValue = this.time;
      this.counterValue = 0;
      this.buttonText = 'Start Work';
    },
    startCounter() {
      this.counterValue = this.time;
      const interval = setInterval(() => {
        this.updateCounter();
        if (this.counterValue === 0) {
          clearInterval(interval);
          alert('Done! Time to rest :)');
          this.resetCounter();
        }
      }, 1000);
    },
    updateCounter() {
      if (this.counterValue > 0) {
        this.buttonText = this.counterValue;
        this.counterValue = this.counterValue - 1;
      }
    },
  },
};
</script>
