import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./router";
import singleSpaVue from "single-spa-vue";
import { unloadApplication } from "single-spa";

Vue.use(Router);
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router
  }
});

setTimeout(() => {
  unloadApplication("angularJS", { waitForUnmount: true });
  console.log("angularJS be unloaded;");
}, 10000);

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
