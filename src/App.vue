<template>
  <div>
    <app-navigation></app-navigation>
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

export default {
  components: {
    appNavigation: Navigation,
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
