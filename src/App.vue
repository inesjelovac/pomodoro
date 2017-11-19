<template>
  <div class="full-height">
    <app-navigation></app-navigation>
    <div class="container content-height">
      <div class="row full-height">
        <div class="col-xs-12 offset-md-6 col-md-6">
          <div class="d-flex flex-column justify-content-center align-items-center full-height">
            <div class="p-2">
              <app-work-counter></app-work-counter>
            </div>
            <div class="p-2">
              <app-rest-counter></app-rest-counter>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar fixed-bottom nav-height">
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
html {
  height: 100%;
}
body {
  background: url('/static/img/bg_1.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  height: 100%;
}
.full-height {
  height: 100%;
}
.content-height{
  height: 90%;
}
.nav-height{
  height: 5%;
}
</style>
