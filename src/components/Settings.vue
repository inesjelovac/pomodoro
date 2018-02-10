<template>

  <div class="container content-height">
      <div class="row full-height">
        <div class="col-xs-12 offset-md-6 col-md-6">
          <div class="d-flex flex-column justify-content-center align-items-center full-height">
            <div class="jumbotron">
              <h3>Settings</h3>
              <hr>
              <form>
                <div class="form-group">
                  <label for="workCounterTime">Work counter time</label>
                  <input type="text" class="form-control" id="workCounterTime" v-model="workCounterValue">
                  <small class="form-text text-muted">Recommended value is 25 minutes.</small>
                </div>
                <div class="form-group">
                  <label for="restCounterTIme">Rest counter time</label>
                  <input type="text" class="form-control" id="restCounterTime" v-model="restCounterValue">
                  <small class="form-text text-muted">Recommended value is 5 minutes.</small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     </div>
</template>

<script>
export default {
  computed: {
    workCounterValue: {
      get() {
        return this.$store.getters.getWorkCounterTimeInMinutes;
      },
      set(value) {
        this.$store.commit('setWorkCounterTime', value);
      },
    },
    restCounterValue: {
      get() {
        return this.$store.getters.getRestCounterTimeInMinutes;
      },
      set(value) {
        this.$store.commit('setRestCounterTime', value);
      },
    },
  },
};

</script>
