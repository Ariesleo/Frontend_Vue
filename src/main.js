import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BootstrapVue,
  IconsPlugin,
  VBTogglePlugin,
  BootstrapVueIcons,
  SidebarPlugin
} from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(VBTogglePlugin);
Vue.use(SidebarPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
