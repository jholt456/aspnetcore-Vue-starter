<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <nav-menu params="route: route"></nav-menu>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  components: {
    "nav-menu": require("./nav-menu.vue").default
  }
})
export default class AppRoot extends Vue {

}
</script>
<style>
</style>
