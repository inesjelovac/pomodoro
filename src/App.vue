<template>
  <div>
    <app-navigation></app-navigation>
    <app-work-counter></app-work-counter>
    <app-rest-counter></app-rest-counter>
    <nav class="navbar fixed-bottom">
      <div></div>
      <div class="navbar-right">
        photo credit: marcoverch <a href="http://www.flickr.com/photos/149561324@N03/38402897046">Nahaufnahme einer Weckuhr</a> via <a href="http://photopin.com">photopin</a> <a href="https://creativecommons.org/licenses/by/2.0/">(license)</a>
      </div>
    </nav>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import RestCounter from './components/RestCounter';
import WorkCounter from './components/WorkCounter';

export default {
  components: {
    appNavigation: Navigation,
    appWorkCounter: WorkCounter,
    appRestCounter: RestCounter,
  },
};
</script>

<style>
body {
  background: url('/static/img/bg_1.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
</style>
