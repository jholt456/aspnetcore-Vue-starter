<template>
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a Vue.js component & Vuex</p>

    <p>
      Current count (Vuex):
      <strong>{{ currentCount }}</strong>
    </p>
    <p>
      Auto count:
      <strong>{{ autoCount }}</strong>
    </p>

    <button type="button" class="btn btn-primary" @click="incrementCounter()">Increment</button>
    <button type="button" class="btn btn-secondary" @click="resetCounter()">Reset</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
 import { CounterModule } from "../store/counter-module";

@Component
export default class CounterExample extends Vue {
  autoCount = 0;

  get currentCount() {
     return CounterModule.count;
  }

  incrementCounter() {
     var counter = this.currentCount + 1;
     CounterModule.setCounter({ count: counter });
  }

  resetCounter() {
    CounterModule.setCounter({ count: 0 });
    this.autoCount = 0;
  }
  created() {
    setInterval(() => {
      this.autoCount += 1;
    }, 1000);
  }
}
</script>

<style>
</style>
