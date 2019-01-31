import Vue from 'vue';
import { AxiosInstance } from 'axios';
export interface VueHttp extends Vue {
  $http: AxiosInstance;
}
