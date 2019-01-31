import Vue from "vue";
import axios from "axios";
import router from "./router/index";
import store from "./store";
import { sync } from "vuex-router-sync";
import { FontAwesomeIcon } from "./icons";
import AppRoot from './components/app-root.vue';

// Registration of global components
Vue.component("icon", FontAwesomeIcon);

Vue.prototype.$http = axios;

sync(store, router);


const app = new AppRoot({
  store,
  router
});

export { app, router, store };
