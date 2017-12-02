<template>
  <div class="p-2">
    <app-counter-button v-if="counterValue === 0" @startCounter="startCounter" :buttonText="buttonText"></app-counter-button>
    <app-countdown v-else @toggleCounter="toggleCounter" :counterValue="counterValue"></app-countdown>
  </div>
</template>

<script>
import CounterButton from './CounterButton';
import Countdown from './Countdown';

export default {
  props: {
    buttonText: {
      default: 'Start',
    },
  },
  data() {
    return {
      time: 10, // 25 * 60,
      counterValue: 0,
      counterRunning: false,

    };
  },
  methods: {
    resetCounter() {
      this.counterValue = this.time;
      this.counterValue = 0;
    },
    startCounter() {
      this.counterValue = this.time;
      this.counterRunning = true;
      this.count();
    },
    toggleCounter() {
      if (this.counterRunning === false) {
        this.counterRunning = true;
        this.count();
      } else {
        this.counterRunning = false;
      }
    },
    count() {
      const interval = setInterval(() => {
        if (this.counterRunning === false) {
          clearInterval(interval);
        }

        if (this.counterValue === 0) {
          clearInterval(interval);
          alert('Done! Time to rest :)');
          this.resetCounter();
        }

        this.updateCounter();
      }, 1000);
    },
    updateCounter() {
      if (this.counterValue > 0) {
        this.counterValue = this.counterValue - 1;
      }
    },
  },
  components: {
    appCounterButton: CounterButton,
    appCountdown: Countdown,
  },
};
</script>
