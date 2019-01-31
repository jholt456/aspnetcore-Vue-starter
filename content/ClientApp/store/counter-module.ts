import {
    Module,
    VuexModule,
    Mutation,
    Action,
    getModule
  } from "vuex-module-decorators";
  import { ICounterState } from "./ICounterState";
  import store from ".";
  
  @Module({ dynamic: true, store, name: "counter" })
  export class Counter extends VuexModule implements ICounterState {
    public count = 1;
  
    @Mutation
    increment(extra: number) {
      this.count = extra;
    }
  
    @Action({ commit: "increment" })
    public setCounter(state: ICounterState) {
      return state.count;
    }
  }
  
  export const CounterModule = getModule(Counter);
  